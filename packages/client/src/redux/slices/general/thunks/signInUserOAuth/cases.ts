// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const signInUserOAuthPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignInUser = "PENDING";
};

export const signInUserOAuthFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  const pageType = action.payload as "signin" | "signup";
  console.log(action.payload);

  if (pageType === "signup") {
    localStorage.setItem("createResearchManagerAccount", "create");
  }

  state.loadingSignInUser = "SUCCEDED";
};

export const signInUserOAuthRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignInUser = "FAILED";

  localStorage.removeItem("createResearchManagerAccount");
};
