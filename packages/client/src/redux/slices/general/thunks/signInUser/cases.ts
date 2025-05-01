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
  state.generalModal = {
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

  if (!axiosError?.isAxiosError) {
    state.userProfile = transformEntityIntoEntityRedux(
      user,
      "user",
    ) as UserRedux;

    state.loadingSignInUser = "SUCCEEDED";

    state.generalModal = {
      isClosed: false,
      message: `Successfully signed in user: ${user.username}.`,
      type: "general",
      isLoading: false,
    };
  } else {
    const errorData = axiosError?.response?.data as {
      message: string[] | string;
    };

    const { message, errorFields } = handleFormErrorInputsAndModalMessage(
      errorData.message,
    );
    state.errorFields = errorFields;

    state.loadingSignInUser = "REJECTED";

    state.generalModal = {
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
  state.loadingSignUpUser = "REJECTED";
  state.generalModal = {
    isClosed: false,
    message: "Could not sign in your Account.",
    type: "general",
    isLoading: true,
  };
};
