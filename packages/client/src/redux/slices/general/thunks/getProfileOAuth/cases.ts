// Types
import { AxiosError } from "axios";
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
  UserRedux,
} from "@/core/types";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";
import { UserPayload } from "@researchmanager/shared/types";

export const getProfileOAuthPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const hasUserCreatedAccountBefore = localStorage.getItem(
    "rm-user-prev-created-account",
  );

  state.loadingGetProfileOAuth = "PENDING";
  state.generalModal = {
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

  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const userPayload = action.payload as UserPayload;

    const userRedux = transformEntityIntoEntityRedux(
      userPayload,
      "user",
    ) as UserRedux;

    state.userProfile = userRedux;

    state.loadingGetProfileOAuth = "SUCCEEDED";
    state.generalModal = {
      isClosed: hasUserCreatedAccountBefore !== "true",
      isLoading: false,
      message: `Welcome back ${userPayload.username}.`,
      type: "general",
    };
  } else {
    state.generalModal = {
      isClosed: hasUserCreatedAccountBefore !== "true",
      isLoading: false,
      message: `Could not fetch your Account :(`,
      type: "general",
    };
    state.loadingGetProfileOAuth = "REJECTED";
  }
};

export const getProfileOAuthRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const hasUserCreatedAccountBefore = localStorage.getItem(
    "rm-user-prev-created-account",
  );

  state.loadingGetProfileOAuth = "REJECTED";
  state.generalModal = {
    isClosed: hasUserCreatedAccountBefore !== "true",
    isLoading: false,
    message: `Could not fetch your Account :(`,
    type: "general",
  };
};
