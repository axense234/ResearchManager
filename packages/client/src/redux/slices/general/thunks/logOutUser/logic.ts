// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import axios, { AxiosError } from "axios";
// Next Auth
import { signOut } from "next-auth/react";

export const logOutUser = createAsyncThunk("general/logOutUser", async () => {
  try {
    await axiosInstance.post(`/auth/logout`);
    await signOut({
      redirect: true,
      callbackUrl: `${process.env.NEXT_PUBLIC_PRODUCTION_CLIENT_SITE_URL}/`,
    });
  } catch (error) {
    console.log(error);
    return error as AxiosError;
  }
});
