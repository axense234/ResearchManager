// Types
import { User } from "@prisma/client";
import { AxiosError } from "axios";
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
  UserRedux,
} from "@/core/types";
// Helpers
import {
  handleFormErrorInputsAndModalMessage,
  transformEntityIntoEntityRedux,
} from "@/helpers";

export const signInUserPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignInUser = "PENDING";
  state.modal = {
    isClosed: false,
    message: "Trying to sign in your Account.",
    type: "general",
    isLoading: true,
  };
};

export const signInUserFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const user = action.payload as User;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    state.userProfile = transformEntityIntoEntityRedux(
      user,
      "user",
    ) as UserRedux;

    state.loadingSignInUser = "REJECTED";

    state.modal = {
      isClosed: false,
      message: `Successfully signed in user: ${user.username}.`,
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

    state.loadingSignInUser = "FAILED";

    state.modal = {
      isClosed: false,
      message,
      type: "form",
      isLoading: false,
    };
  }
};

export const signInUserRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "FAILED";
  state.modal = {
    isClosed: false,
    message: "Could not sign in your Account.",
    type: "general",
    isLoading: true,
  };
};
