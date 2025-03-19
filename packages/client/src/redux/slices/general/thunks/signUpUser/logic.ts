// Prisma
import { User } from "@prisma/client";
// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils";
// Dtos
import { SignUpDto } from "@researchmanager/shared/types";

export const signUpUser = createAsyncThunk<User | AxiosError, SignUpDto>(
  "general/signUpUser",
  async (signUpUserDto) => {
    try {
      const { data } = await axiosInstance.post("/auth/signup", signUpUserDto);
      return user;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  },
);
