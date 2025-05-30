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
  state.generalModal = {
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

  if (!axiosError?.isAxiosError) {
    const userPayload = action.payload as UserPayload;
    const userRedux = transformEntityIntoEntityRedux(
      userPayload,
      "user",
    ) as UserRedux;

    state.userProfile = userRedux;

    state.loadingGetProfileJWT = "SUCCEEDED";
    state.generalModal = {
      isClosed: hasUserCreatedAccountBefore !== "true",
      isLoading: false,
      message: `Welcome back ${userPayload.username}.`,
      type: "general",
    };
  } else {
    state.loadingGetProfileJWT = "REJECTED";
    state.generalModal = {
      isClosed: hasUserCreatedAccountBefore !== "true",
      isLoading: false,
      message: `Could not fetch your Account :(`,
      type: "general",
    };
  }
};

export const getProfileJWTRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const hasUserCreatedAccountBefore = localStorage.getItem(
    "rm-user-prev-created-account",
  );

  state.loadingGetProfileJWT = "REJECTED";
  state.generalModal = {
    isClosed: hasUserCreatedAccountBefore !== "true",
    isLoading: false,
    message: `Could not fetch your Account :(`,
    type: "general",
  };
};
