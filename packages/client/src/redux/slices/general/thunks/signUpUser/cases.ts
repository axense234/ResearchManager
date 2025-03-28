// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const signUpUserPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "PENDING";
};

export const signUpUserFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "SUCCEDED";
};

export const signUpUserRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingSignUpUser = "FAILED";
};
