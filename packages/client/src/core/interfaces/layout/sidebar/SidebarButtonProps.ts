// Types
import { NavigationButtonContentType } from "@/core/types";
import { MouseEventHandler } from "react";

export interface SidebarButtonProps {
  button: NavigationButtonContentType;
  onClickFunction: MouseEventHandler<HTMLButtonElement> | undefined;
}
