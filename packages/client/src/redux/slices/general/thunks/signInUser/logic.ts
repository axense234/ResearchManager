// Prisma
import { User } from "@prisma/client";
// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";
// Types
import {
  ReturnObjectBuilderReturnObject,
  SignInDto,
} from "@researchmanager/shared/types";

export const signInUser = createAsyncThunk<User | AxiosError, SignInDto>(
  "general/signInUser",
  async (signInUserDto) => {
    try {
      const res = (await axiosInstance.post("/auth/signin", signInUserDto))
        .data as ReturnObjectBuilderReturnObject;

      localStorage.setItem(
        process.env.NEXT_PUBLIC_JWT_KEY_LABEL || "rm-jwt",
        res.access_token as string,
      );

      return res.payload as User;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
