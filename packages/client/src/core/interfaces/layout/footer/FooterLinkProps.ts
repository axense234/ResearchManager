// Types
import { NavigationButtonContentType } from "@/core/types";
import { MouseEventHandler } from "react";

export interface FooterLinkProps {
  link: NavigationButtonContentType;
  onClickFunction: MouseEventHandler<HTMLButtonElement> | undefined;
}
