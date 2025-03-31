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
  SignUpDto,
} from "@researchmanager/shared/types";

export const signUpUser = createAsyncThunk<User | AxiosError, SignUpDto>(
  "general/signUpUser",
  async (signUpUserDto) => {
    try {
      const res = (
        await axiosInstance.post("/auth/signup", signUpUserDto, {
          params: {
            includeValues: "createdAt, updatedAt",
            chosenOptionType: "include",
          },
        })
      ).data as ReturnObjectBuilderReturnObject;

      localStorage.setItem(
        process.env.NEXT_PUBLIC_JWT_KEY_LABEL || "rm-jwt",
        res.access_token as string,
      );

      localStorage.setItem("rm-user-prev-created-account", "true");

      return res.payload as User;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
