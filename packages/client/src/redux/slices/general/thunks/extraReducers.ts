// Redux Toolkit
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// Types
import {
  EntitiesSliceInitialStateType,
  GeneralSliceInitialStateType,
} from "@/core/types";
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
import {
  signUpUser,
  signUpUserFulfilled,
  signUpUserPending,
  signUpUserRejected,
} from "./signUpUser";
import {
  uploadImageToCloudinary,
  uploadImageToCloudinaryFulfilled,
  uploadImageToCloudinaryPending,
  uploadImageToCloudinaryRejected,
} from "./uploadImageToCloudinary";
import {
  signUpUserOAuth,
  signUpUserOAuthFulfilled,
  signUpUserOAuthPending,
  signUpUserOAuthRejected,
} from "./signUpUserOAuth";
import {
  signInUserOAuth,
  signInUserOAuthFulfilled,
  signInUserOAuthPending,
  signInUserOAuthRejected,
} from "./signInUserOAuth";
import {
  getProfileOAuth,
  getProfileOAuthFulfilled,
  getProfileOAuthPending,
  getProfileOAuthRejected,
} from "./getProfileOAuth";
import {
  signInUser,
  signInUserFulfilled,
  signInUserPending,
  signInUserRejected,
} from "./signInUser";

export const generalSliceExtraReducers: (
  builder: ActionReducerMapBuilder<GeneralSliceInitialStateType>,
) => void = (builder) => {
  builder
    .addCase(logOutUser.pending, logOutUserPending)
    .addCase(logOutUser.fulfilled, logOutUserFulfilled)
    .addCase(logOutUser.rejected, logOutUserRejected)
    .addCase(getProfileJWT.pending, getProfileJWTPending)
    .addCase(getProfileJWT.fulfilled, getProfileJWTFulfilled)
    .addCase(getProfileJWT.rejected, getProfileJWTRejected)
    .addCase(signUpUser.pending, signUpUserPending)
    .addCase(signUpUser.fulfilled, signUpUserFulfilled)
    .addCase(signUpUser.rejected, signUpUserRejected)
    .addCase(uploadImageToCloudinary.pending, uploadImageToCloudinaryPending)
    .addCase(
      uploadImageToCloudinary.fulfilled,
      uploadImageToCloudinaryFulfilled,
    )
    .addCase(uploadImageToCloudinary.rejected, uploadImageToCloudinaryRejected)
    .addCase(signUpUserOAuth.pending, signUpUserOAuthPending)
    .addCase(signUpUserOAuth.fulfilled, signUpUserOAuthFulfilled)
    .addCase(signUpUserOAuth.rejected, signUpUserOAuthRejected)
    .addCase(signInUserOAuth.pending, signInUserOAuthPending)
    .addCase(signInUserOAuth.fulfilled, signInUserOAuthFulfilled)
    .addCase(signInUserOAuth.rejected, signInUserOAuthRejected)
    .addCase(signInUser.pending, signInUserPending)
    .addCase(signInUser.fulfilled, signInUserFulfilled)
    .addCase(signInUser.rejected, signInUserRejected)
    .addCase(getProfileOAuth.pending, getProfileOAuthPending)
    .addCase(getProfileOAuth.fulfilled, getProfileOAuthFulfilled)
    .addCase(getProfileOAuth.rejected, getProfileOAuthRejected);
};
