// Redux Toolkit
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// Types
import { GeneralSliceInitialStateType } from "@/core/types";
// Extra Reducers
import {
  logOutUser,
  logOutUserFulfilled,
  logOutUserPending,
  logOutUserRejected,
} from "./logOutUser";
import {
  getProfileJWT,
  getProfileJWTFulfilled,
  getProfileJWTPending,
  getProfileJWTRejected,
} from "./getProfileJWT";

export const generalSliceExtraReducers: (
  builder: ActionReducerMapBuilder<GeneralSliceInitialStateType>,
) => void = (builder) => {
  builder
    .addCase(logOutUser.pending, logOutUserPending)
    .addCase(logOutUser.fulfilled, logOutUserFulfilled)
    .addCase(logOutUser.rejected, logOutUserRejected)
    .addCase(getProfileJWT.pending, getProfileJWTPending)
    .addCase(getProfileJWT.fulfilled, getProfileJWTFulfilled)
    .addCase(getProfileJWT.rejected, getProfileJWTRejected);
};
