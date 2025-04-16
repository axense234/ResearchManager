// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
  UserRedux,
} from "@/core/types";
import { User } from "@prisma/client";
import { AxiosError } from "axios";
// Helpers
import {
  handleFormErrorInputsAndModalMessage,
  transformEntityIntoEntityRedux,
} from "@/helpers";

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

  if (!axiosError?.isAxiosError) {
    state.userProfile = transformEntityIntoEntityRedux(
      user,
      "user",
    ) as UserRedux;
    state.loadingSignUpUser = "SUCCEEDED";

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

    state.loadingSignUpUser = "REJECTED";

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
  state.loadingSignUpUser = "REJECTED";

  state.modal = {
    isClosed: false,
    message: "Could not create your Account.",
    type: "general",
    isLoading: false,
  };
};
