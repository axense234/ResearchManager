// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const logOutUserPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};

export const logOutUserFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};

export const logOutUserRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};
