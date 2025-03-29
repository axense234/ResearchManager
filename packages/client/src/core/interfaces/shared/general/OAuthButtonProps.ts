// Types
import { MouseEventHandler, ReactNode } from "react";

export interface OAuthButtonProps {
  optionType: "google" | "github";
  reactIcon: ReactNode;
  pageType: "signin" | "signup";
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
}
