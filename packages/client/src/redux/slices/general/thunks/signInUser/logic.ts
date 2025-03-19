// Prisma
import { User } from "@prisma/client";
// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";
// Dto
import { SignInDto } from "@researchmanager/shared/types";

export const signInUser = createAsyncThunk<User | AxiosError, SignInDto>(
  "general/signInUser",
  async (signInUserDto) => {
    try {
      const user = await axiosInstance.post("/auth/signin", signInUserDto);
      localStorage.setItem("userId", data.user.id);
      return data.user as User;
    } catch (error) {
      return error as AxiosError;
    }
  },
);
