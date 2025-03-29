// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";
import { User } from "@prisma/client";
import { AxiosError } from "axios";

export const getProfileOAuthPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingGetProfileOAuth = "PENDING";
};

export const getProfileOAuthFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const user = action.payload as User;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.response) {
    state.userProfile = user;
    state.loadingGetProfileOAuth = "SUCCEDED";
  } else {
    state.loadingGetProfileOAuth = "FAILED";
  }
};

export const getProfileOAuthRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingGetProfileOAuth = "FAILED";
};
