// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";
import { AxiosError } from "axios";

export const logOutUserPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingLogOutUser = "PENDING";

  state.generalModal = {
    isClosed: false,
    isLoading: false,
    message: "Trying to log out of your Account.",
    type: "general",
  };
};

export const logOutUserFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const message = action.payload as string;

    state.generalModal = {
      isClosed: false,
      isLoading: false,
      message,
      type: "general",
    };
  }

  state.loadingLogOutUser = "SUCCEEDED";
};

export const logOutUserRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingLogOutUser = "REJECTED";

  state.generalModal = {
    isClosed: false,
    isLoading: false,
    message: "Could not log out of your Account!",
    type: "general",
  };
};
