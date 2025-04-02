// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Types
import { Tag } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";

export const getUserTag = createAsyncThunk<Tag | AxiosError, string>(
  "tags/getUserTag",
  async (tagId) => {
    try {
      const res = (await axiosInstance.get(`/tags/${tagId}`))
        .data as ReturnObjectBuilderReturnObject;

      return res.payload as Tag;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
