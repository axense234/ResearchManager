// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const getProfileJWTPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};

export const getProfileJWTFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};

export const getProfileJWTRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};
