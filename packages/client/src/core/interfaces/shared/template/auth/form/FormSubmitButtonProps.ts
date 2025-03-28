// React
import { MouseEventHandler } from "react";

export interface FormSubmitButtonProps {
  content: string;
  disabled: boolean;
  onHoverContent: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement> | undefined;
}
