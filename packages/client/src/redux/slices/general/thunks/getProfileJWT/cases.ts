// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";
import { User } from "@prisma/client";
import { AxiosError } from "axios";

export const getProfileJWTPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingGetProfileJWT = "PENDING";
};

export const getProfileJWTFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const user = action.payload as User;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.response) {
    state.userProfile = user;
    state.loadingGetProfileJWT = "SUCCEDED";
  } else {
    state.loadingGetProfileJWT = "FAILED";
  }
};

export const getProfileJWTRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingGetProfileJWT = "FAILED";
};
