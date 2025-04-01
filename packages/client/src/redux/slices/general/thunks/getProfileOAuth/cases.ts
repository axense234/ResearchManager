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

export const getProfileOAuthPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const hasUserCreatedAccountBefore = localStorage.getItem(
    "rm-user-prev-created-account",
  );

  state.loadingGetProfileOAuth = "PENDING";
  state.modal = {
    isClosed: hasUserCreatedAccountBefore !== "true",
    isLoading: true,
    message: "Trying to fetch your Account :)",
    type: "general",
  };
};

export const getProfileOAuthFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const hasUserCreatedAccountBefore = localStorage.getItem(
    "rm-user-prev-created-account",
  );

  const user = action.payload as User;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.response) {
    state.userProfile = transformEntityIntoEntityRedux(user) as UserRedux;

    state.loadingGetProfileOAuth = "SUCCEDED";
    state.modal = {
      isClosed: hasUserCreatedAccountBefore !== "true",
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
    state.loadingGetProfileOAuth = "FAILED";
  }
};

export const getProfileOAuthRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const hasUserCreatedAccountBefore = localStorage.getItem(
    "rm-user-prev-created-account",
  );

  state.loadingGetProfileOAuth = "FAILED";
  state.modal = {
    isClosed: hasUserCreatedAccountBefore !== "true",
    isLoading: false,
    message: `Could not fetch your Account :(`,
    type: "general",
  };
};
