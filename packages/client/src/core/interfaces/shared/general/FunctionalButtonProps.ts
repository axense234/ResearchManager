// React
import { MouseEventHandler } from "react";

export interface FunctionalButtonProps {
  content: string;
  disabled: boolean;
  onHoverContent: string;
  onHoverContentDisabled: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement> | undefined;
}
