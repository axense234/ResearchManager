// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";
import { AxiosError } from "axios";
import { User } from "@prisma/client";
// Helpers
import { handleFormErrorInputsAndModalMessage } from "@/helpers";

export const signUpUserOAuthPending: ExtraReducerFuncType<
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

export const signUpUserOAuthFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  localStorage.removeItem("createResearchManagerAccount");

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

export const signUpUserOAuthRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  localStorage.removeItem("createResearchManagerAccount");

  state.modal = {
    isClosed: false,
    message: "Could not create your Account.",
    type: "general",
    isLoading: false,
  };
};
