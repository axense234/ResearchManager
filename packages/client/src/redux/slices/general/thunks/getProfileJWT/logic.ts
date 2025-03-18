// Axios
import { AxiosError } from "axios";
// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Utils
import { axiosInstance } from "@/utils";

export const getProfileJWT = createAsyncThunk<UpdateUserDto | AxiosError>(
  "general/getProfileJWT",
  async () => {
    try {
      const user = (await axiosInstance.get(`/users/profile`))
        .data as UpdateUserDto;
      return user;
    } catch (error) {
      return error as AxiosError;
    }
  },
);
