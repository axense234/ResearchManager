// Axios
import { AxiosError } from "axios";
// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Utils
import { axiosInstance } from "@/utils";
// Types
import { User } from "@prisma/client";
import type { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";

export const getProfileJWT = createAsyncThunk<User | AxiosError>(
  "general/getProfileJWT",
  async () => {
    try {
      const res = (await axiosInstance.get(
        `/users/profile`,
      )) as ReturnObjectBuilderReturnObject;
      return res.payload as User;
    } catch (error) {
      return error as AxiosError;
    }
  },
);
