// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Next Auth
import { signOut } from "next-auth/react";

export const logOutUser = createAsyncThunk<void | AxiosError>(
  "general/logOutUser",
  async () => {
    try {
      await axiosInstance.post(`/auth/logout`);
      await signOut({
        redirect: true,
        callbackUrl: `${process.env.NEXT_PUBLIC_PRODUCTION_CLIENT_SITE_URL}/`,
      });
      localStorage.removeItem(
        process.env.NEXT_PUBLIC_JWT_KEY_LABEL || "rm-jwt",
      );
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
