// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const uploadImageToCloudinaryPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};

export const uploadImageToCloudinaryFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};

export const uploadImageToCloudinaryRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {};
