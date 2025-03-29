// Types
import { ReactNode } from "react";

export type OAuthOptionContent = {
  id?: number;
  reactIcon: ReactNode;
  optionType: "google" | "github";
  pageType?: "login" | "signup";
};
