// Redux Toolkit
import {
  UploadImageToCloudinaryDto,
  UploadImageToCloudinaryResponse,
} from "@/core/types";
// Axios
import axios from "axios";
// Types
import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadImageToCloudinary = createAsyncThunk<
  UploadImageToCloudinaryResponse | unknown,
  UploadImageToCloudinaryDto
>("general/uploadImageToCloudinary", async (uploadImageToCloudinaryDto) => {
  try {
    const { entityPlural, imageFile, type } = uploadImageToCloudinaryDto;
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", `research-manager-${entityPlural}`);

    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_IMAGE_URL as string,
      formData,
    );
    return { imageUrl: data.secure_url, type: type };
  } catch (error) {
    return error;
  }
});
