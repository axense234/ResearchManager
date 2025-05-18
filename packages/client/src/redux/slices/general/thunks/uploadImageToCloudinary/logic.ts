// Redux Toolkit
import {
  UploadImageToCloudinaryDto,
  UploadImageToCloudinaryResponse,
} from "@/core/types";
// Axios
import axios, { AxiosError } from "axios";
// Types
import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadImageToCloudinary = createAsyncThunk<
  string[] | string | AxiosError,
  UploadImageToCloudinaryDto
>("general/uploadImageToCloudinary", async (uploadImageToCloudinaryDto) => {
  try {
    const { images, entityType, uploadType } = uploadImageToCloudinaryDto;

    const formData = new FormData();
    formData.append("upload_preset", `research-manager-${entityType}`);

    if (uploadType === "single") {
      formData.append("file", images as File);

      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_IMAGE_URL as string,
        formData,
      );

      return data.secure_url as string;
    }

    const uploadImages = Object.keys(images)
      .slice(0, 5)
      .map(async (imageIndex) => {
        formData.append(`file`, images[imageIndex]);

        const { data } = await axios.post(
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_IMAGE_URL as string,
          formData,
        );

        return data.secure_url as string;
      });

    const imagesUrls = await Promise.all(uploadImages);

    return imagesUrls as string[];
  } catch (error) {
    return error as AxiosError;
  }
});
