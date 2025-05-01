// React
import { MouseEventHandler } from "react";

export interface FormSubmitButtonProps {
  content: string;
  disabled: boolean;
  onHoverContent: string;
  onHoverContentDisabled: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement> | undefined;
}
