// Axios
import { AxiosError } from "axios";
// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Utils
import { axiosInstance } from "@/utils";
// Types
import { User } from "@prisma/client";

export const getProfileJWT = createAsyncThunk<User | AxiosError>(
  "general/getProfileJWT",
  async () => {
    try {
      const res =
        // type should be the return type but i havent done stuff to the getProfile service on the backend yet
        (
          await axiosInstance.get(`/users/profile`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(process.env.NEXT_PUBLIC_JWT_KEY_LABEL as string)}`,
            },
          })
        ).data as any;

      console.log(res);
      return res.user as User;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
