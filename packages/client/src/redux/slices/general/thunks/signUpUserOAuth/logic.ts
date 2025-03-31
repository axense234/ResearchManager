// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";
// Next Auth
import { getSession } from "next-auth/react";
// Types
import {
  ReturnObjectBuilderReturnObject,
  SignUpDto,
} from "@researchmanager/shared/types";
import { User } from "@prisma/client";
// Mock Data
import { signUpMockData } from "@researchmanager/shared/mock";

export const signUpUserOAuth = createAsyncThunk<User | AxiosError>(
  "general/signupUserOAuth",
  async () => {
    try {
      const session = await getSession();
      const signUpUserDto = { ...signUpMockData[0] } as SignUpDto;

      signUpUserDto.password = process.env
        .NEXT_PUBLIC_OAUTH_PASSWORD_LABEL as string;
      signUpUserDto.username = session?.user?.name as string;
      signUpUserDto.email = session?.user?.email as string;
      signUpUserDto.profileImageSrc =
        (session?.user?.image as string) || signUpUserDto.profileImageSrc;

      const res = (await axiosInstance.post("/auth/signup", signUpUserDto))
        .data as ReturnObjectBuilderReturnObject;

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
