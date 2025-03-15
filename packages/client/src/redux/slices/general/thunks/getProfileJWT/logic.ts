// Axios
import { AxiosError } from "axios";
// Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Prisma
import { User } from "@prisma/client";
// Utils
import { axiosInstance } from "@/utils";
// test
import { UpdateUserDto } from "../../../../../../../server/src/modules/entity/user/dto/user.dto";

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
