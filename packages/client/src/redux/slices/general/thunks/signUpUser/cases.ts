// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";
import { User } from "@prisma/client";
import { AxiosError } from "axios";
// Helpers
import { handleFormErrorInputsAndModalMessage } from "@/helpers";

export const signUpUserPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "PENDING";
  state.modal = {
    isClosed: false,
    message: "Trying to create your Account.",
    type: "general",
    isLoading: true,
  };
};

export const signUpUserFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const user = action.payload as User;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    console.log(user);
    state.userProfile = {
      ...user,
      createdAt: new Date(user.createdAt).toISOString(),
      updatedAt: new Date(user.updatedAt).toISOString(),
    };
    state.loadingSignUpUser = "SUCCEDED";

    state.modal = {
      isClosed: false,
      message: `Successfully signed up user: ${user.username}.`,
      type: "general",
      isLoading: false,
    };
  } else {
    const errorData = axiosError?.response?.data as {
      message: string[] | string;
    };

    const { message } = handleFormErrorInputsAndModalMessage(
      errorData.message,
      state.errorFields,
      (errorMessage: string) => {
        state.errorFields.push(errorMessage.split(" ")[0]);
      },
    );

    state.loadingSignUpUser = "FAILED";

    state.modal = {
      isClosed: false,
      message,
      type: "form",
      isLoading: false,
    };
  }
};

export const signUpUserRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "FAILED";

  state.modal = {
    isClosed: false,
    message: "Could not create your Account.",
    type: "general",
    isLoading: false,
  };
};
