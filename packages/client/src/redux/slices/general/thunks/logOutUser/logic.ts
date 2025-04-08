// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Next Auth
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
// Next Auth
import { signOut } from "next-auth/react";

export const logOutUser = createAsyncThunk<string | AxiosError>(
  "general/logOutUser",
  async () => {
    try {
      const res = (await axiosInstance.post(`/auth/logout`))
        .data as ReturnObjectBuilderReturnObject;

      await signOut({
        redirect: true,
        callbackUrl: `${process.env.NEXT_PUBLIC_PRODUCTION_CLIENT_SITE_URL}/`,
      });

      localStorage.removeItem(
        process.env.NEXT_PUBLIC_JWT_KEY_LABEL || "rm-jwt",
      );

      return res.message as string;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
