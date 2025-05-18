// Types
import {
  ExtraReducerFuncType,
  GeneralSliceInitialStateType,
} from "@/core/types";

export const uploadImageToCloudinaryPending: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingUploadImageToCloudinary = "PENDING";
};

export const uploadImageToCloudinaryFulfilled: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingUploadImageToCloudinary = "SUCCEEDED";
};

export const uploadImageToCloudinaryRejected: ExtraReducerFuncType<
  GeneralSliceInitialStateType
> = (state, action) => {
  state.loadingUploadImageToCloudinary = "REJECTED";
};
