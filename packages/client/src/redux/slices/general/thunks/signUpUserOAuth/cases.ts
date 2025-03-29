// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const signUpUserOAuthPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "PENDING";
};

export const signUpUserOAuthFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "SUCCEDED";
  localStorage.removeItem("createResearchManagerAccount");
};

export const signUpUserOAuthRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "FAILED";
  localStorage.removeItem("createResearchManagerAccount");
};
