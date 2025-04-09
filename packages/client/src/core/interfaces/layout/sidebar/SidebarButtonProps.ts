// Types
import { NavigationButtonContentType } from "@/core/types";
import { MouseEventHandler } from "react";

export interface SideBarButtonProps {
  button: NavigationButtonContentType;
  onClickFunction: MouseEventHandler<HTMLButtonElement> | undefined;
}
