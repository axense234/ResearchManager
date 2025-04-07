// Types
import { ReactNode } from "react";

export type NavigationButtonContentType = {
  id: number;
  icon: ReactNode;
  buttonType: "link" | "functional";
  buttonLabel: string;
  buttonDest?: string;
};
