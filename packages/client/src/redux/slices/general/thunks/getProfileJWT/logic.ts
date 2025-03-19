// Axios
import { AxiosError } from "axios";
// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Utils
import { axiosInstance } from "@/utils";
// Dtos
import { User } from "@prisma/client";

export const getProfileJWT = createAsyncThunk<User | AxiosError>(
  "general/getProfileJWT",
  async () => {
    try {
      const user = (await axiosInstance.get(`/users/profile`)).data as User;
      return user;
    } catch (error) {
      return error as AxiosError;
    }
  },
);
