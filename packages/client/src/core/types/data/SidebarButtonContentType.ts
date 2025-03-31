// Types
import { ReactNode } from "react";

export type SidebarButtonContentType = {
  id: number;
  icon: ReactNode;
  buttonType: "link" | "functional";
  buttonLabel: string;
  buttonDest?: string;
};
