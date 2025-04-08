// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const signInUserOAuthPending: ExtraReducerFuncType<
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

export const signInUserOAuthFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const pageType = action.payload as "signin" | "signup";

  if (pageType === "signup") {
    localStorage.setItem("createResearchManagerAccount", "create");
  }

  state.loadingSignInUser = "REJECTED";
};

export const signInUserOAuthRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignInUser = "FAILED";

  localStorage.removeItem("createResearchManagerAccount");

  state.modal = {
    isClosed: false,
    message: "Could not sign in your Account.",
    type: "general",
    isLoading: true,
  };
};
