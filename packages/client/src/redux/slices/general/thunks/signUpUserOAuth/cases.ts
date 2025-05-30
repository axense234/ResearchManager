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

export const signUpUserOAuthPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "PENDING";
  state.generalModal = {
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

  if (!axiosError?.isAxiosError) {
    console.log(user);

    state.userProfile = transformEntityIntoEntityRedux(
      user,
      "user",
    ) as UserRedux;
    state.loadingSignUpUser = "SUCCEEDED";

    state.generalModal = {
      isClosed: false,
      message: `Successfully signed up user: ${user.username}.`,
      type: "general",
      isLoading: false,
    };
  } else {
    const errorData = axiosError?.response?.data as {
      message: string[] | string;
      error: string;
    };

    if (errorData.error === "Forbidden") {
      state.generalModal = {
        isClosed: false,
        message: `Successfully signed in your Account.`,
        type: "general",
        isLoading: false,
      };
      state.loadingSignUpUser = "REJECTED";
      state.loadingSignInUser = "SUCCEEDED";

      console.log("hello");
    } else {
      state.loadingSignUpUser = "REJECTED";

      state.generalModal = {
        isClosed: false,
        message: "Could not create your Account.",
        type: "form",
        isLoading: false,
      };
    }
  }
};

export const signUpUserOAuthRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  localStorage.removeItem("createResearchManagerAccount");

  state.loadingSignUpUser = "REJECTED";

  state.generalModal = {
    isClosed: false,
    message: "Could not create your Account.",
    type: "general",
    isLoading: false,
  };
};
