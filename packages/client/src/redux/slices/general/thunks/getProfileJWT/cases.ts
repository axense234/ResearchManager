// Types
import { AxiosError } from "axios";
import { UserPayload } from "@researchmanager/shared/types";
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
  UserRedux,
} from "@/core/types";
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

  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const userPayload = action.payload as UserPayload;
    const userRedux = transformEntityIntoEntityRedux(
      userPayload,
      "user",
    ) as UserRedux;

    state.userProfile = userRedux;

    state.loadingGetProfileJWT = "REJECTED";
    state.modal = {
      isClosed: hasUserCreatedAccountBefore === "true",
      isLoading: false,
      message: `Welcome back ${userPayload.username}.`,
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
