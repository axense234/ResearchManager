// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const signUpUserPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};

export const signUpUserFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};

export const signUpUserRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};
