// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { SignInOAuthDto } from "@/core/types";
// Next Auth
import { signIn } from "next-auth/react";
// Config
import { baseSiteUrl } from "@/config";

export const signInUserOAuth = createAsyncThunk<
  "signup" | "signin" | unknown,
  SignInOAuthDto
>("general/signInUserOAuth", async ({ provider, locale, pageType }) => {
  try {
    await signIn(provider, {
      redirect: true,
      callbackUrl: `${baseSiteUrl}/${locale}/home`,
    });
    return pageType;
  } catch (error) {
    return error;
  }
});
