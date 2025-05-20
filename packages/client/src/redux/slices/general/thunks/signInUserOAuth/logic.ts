// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// Types
import { SignInOAuthDto } from "@/core/types";
// Next Auth
import { signIn } from "next-auth/react";
// Config
import { baseSiteUrl } from "@/config";
// i18
import { routing } from "@/i18n/routing";

export const signInUserOAuth = createAsyncThunk<
  "signup" | "signin" | unknown,
  SignInOAuthDto
>("general/signInUserOAuth", async ({ provider, locale, pageType }) => {
  try {
    await signIn(provider, {
      redirect: true,
      callbackUrl: `${baseSiteUrl}/${locale}${routing.pathnames["/home"][locale]}`,
    });
    localStorage.setItem("rm-user-prev-created-account", "true");
    return pageType;
  } catch (error) {
    return error;
  }
});
