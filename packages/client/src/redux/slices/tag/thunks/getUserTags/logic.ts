// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { Tag } from "@prisma/client";
import {
  GetTagsQueryParams,
  ReturnObjectBuilderReturnObject,
} from "@researchmanager/shared/types";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";

export const getUserTags = createAsyncThunk<
  Tag[] | AxiosError,
  GetTagsQueryParams
>("tags/getUserTags", async (queryParams) => {
  try {
    const { searchByKey, searchByValue, sortByKeys, sortByOrders, userId } =
      queryParams;

    const res = (
      await axiosInstance.get(`/tags`, {
        params: {
          searchByKey,
          searchByValue,
          sortByKeys,
          sortByOrders,
          userId,
        },
      })
    ).data as ReturnObjectBuilderReturnObject;

    return res.payload as Tag[];
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
