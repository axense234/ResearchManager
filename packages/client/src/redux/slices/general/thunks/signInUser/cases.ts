// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const signInUserPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignInUser = "PENDING";
};

export const signInUserFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignInUser = "SUCCEDED";
};

export const signInUserRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "FAILED";
};
