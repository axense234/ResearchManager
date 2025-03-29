export type SignInOAuthDto = {
  provider: "google" | "github";
  locale: any;
  pageType: "signin" | "signup";
};
