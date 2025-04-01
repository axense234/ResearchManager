// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
  UserRedux,
} from "@/core/types";
import { AxiosError } from "axios";
import { User } from "@prisma/client";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const getProfileJWTPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const hasUserCreatedAccountBefore = localStorage.getItem(
    "rm-user-prev-created-account",
  );

  state.loadingGetProfileJWT = "PENDING";
  state.modal = {
    isClosed: hasUserCreatedAccountBefore !== "true",
    isLoading: true,
    message: "Trying to fetch your Account :)",
    type: "general",
  };
};

export const getProfileJWTFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const hasUserCreatedAccountBefore = localStorage.getItem(
    "rm-user-prev-created-account",
  );

  const user = action.payload as User;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.response) {
    state.userProfile = transformEntityIntoEntityRedux(user) as UserRedux;

    state.loadingGetProfileJWT = "SUCCEDED";
    state.modal = {
      isClosed: hasUserCreatedAccountBefore === "true",
      isLoading: false,
      message: `Welcome back ${user.username}.`,
      type: "general",
    };
  } else {
    state.modal = {
      isClosed: hasUserCreatedAccountBefore !== "true",
      isLoading: false,
      message: `Could not fetch your Account :(`,
      type: "general",
    };
    state.loadingGetProfileJWT = "FAILED";
  }
};

export const getProfileJWTRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const hasUserCreatedAccountBefore = localStorage.getItem(
    "rm-user-prev-created-account",
  );

  state.loadingGetProfileJWT = "FAILED";
  state.modal = {
    isClosed: hasUserCreatedAccountBefore !== "true",
    isLoading: false,
    message: `Could not fetch your Account :(`,
    type: "general",
  };
};
