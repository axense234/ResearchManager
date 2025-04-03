// Axios
import { AxiosError } from "axios";
// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Utils
import { axiosInstance } from "@/utils";
// Types
import {
  ReturnObjectBuilderReturnObject,
  UserPayload,
} from "@researchmanager/shared/types";

export const getProfileJWT = createAsyncThunk<UserPayload | AxiosError>(
  "general/getProfileJWT",
  async () => {
    try {
      const res = (
        await axiosInstance.get(`/users/profile`, {
          params: {
            uniqueIdentifierType: "id",
            includeValues: "researchActivities, settings, activityFeed, tags",
            includeDepth: 4,
            chosenOptionType: "include",
          },
        })
      ).data as ReturnObjectBuilderReturnObject;

      console.log(res.payload);
      return res.payload as UserPayload;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
