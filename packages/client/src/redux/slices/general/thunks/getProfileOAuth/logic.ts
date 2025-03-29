// Types
import { User } from "@prisma/client";
import { ReturnObjectBuilderReturnObject } from "@researchmanager/shared/types";
// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Next Auth
import { getSession } from "next-auth/react";

export const getProfileOAuth = createAsyncThunk<User | AxiosError>(
  "general/getProfileOAuth",
  async () => {
    try {
      const session = await getSession();
      console.log(session?.user);
      const res = (
        await axiosInstance.get(`/users/${session?.user?.email}`, {
          params: { uniqueIdentifierType: "email" },
        })
      ).data as ReturnObjectBuilderReturnObject;
      console.log(res);
      return res.payload as User;
    } catch (error) {
      return error as AxiosError;
    }
  },
);
