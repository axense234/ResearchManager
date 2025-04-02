// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Types
import { Tag } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";

export const deleteTag = createAsyncThunk<Tag | AxiosError, string>(
  "tags/deleteTag",
  async (tagId) => {
    try {
      const res = (await axiosInstance.delete(`/tags/${tagId}/delete`))
        .data as ReturnObjectBuilderReturnObject;

      return res.payload as Tag;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
