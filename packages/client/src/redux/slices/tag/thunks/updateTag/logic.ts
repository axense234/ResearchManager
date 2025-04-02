// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { Tag } from "@prisma/client";
import { UpdateTagDtoRedux } from "@/core/types";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";

export const updateTag = createAsyncThunk<Tag | AxiosError, UpdateTagDtoRedux>(
  "tags/updateTag",
  async ({ dto, tagId }) => {
    try {
      const res = (await axiosInstance.patch(`/tags/${tagId}/update`, dto))
        .data as ReturnObjectBuilderReturnObject;

      return res.payload as Tag;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
