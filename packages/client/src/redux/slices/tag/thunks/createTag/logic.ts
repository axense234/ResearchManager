// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { Tag } from "@prisma/client";
import {
  CreateTagDto,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";

export const createTag = createAsyncThunk<Tag | AxiosError, CreateTagDto>(
  "tags/createTag",
  async (createTagDto) => {
    try {
      console.log(createTagDto);
      const res = (await axiosInstance.post("/tags/create", createTagDto))
        .data as ReturnObjectBuilderReturnObject;

      return res.payload as Tag;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
