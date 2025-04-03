// Types
import {
  ReturnObjectBuilderReturnObject,
  UserPayload,
} from "@researchmanager/shared/types";
// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import { axiosInstance } from "@/utils";
import { AxiosError } from "axios";
// Next Auth
import { getSession } from "next-auth/react";

export const getProfileOAuth = createAsyncThunk<UserPayload | AxiosError>(
  "general/getProfileOAuth",
  async () => {
    try {
      const session = await getSession();
      const res = (
        await axiosInstance.get(`/users/${session?.user?.email}`, {
          params: {
            uniqueIdentifierType: "email",
            includeValues: "researchActivities, settings, activityFeed, tags",
            includeDepth: 4,
            chosenOptionType: "include",
          },
        })
      ).data as ReturnObjectBuilderReturnObject;

      console.log("res full", JSON.parse(JSON.stringify(res.payload)));

      return res.payload as UserPayload;
    } catch (error) {
      return error as AxiosError;
    }
  },
);
