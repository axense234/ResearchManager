// React
import { MouseEventHandler } from "react";

export interface FunctionalButtonProps {
  size?: "small" | "medium";
  colorScheme?: "green" | "brown" | "red" | "yellow" | "darkBlue" | "gray";

  content: string;
  disabled: boolean;
  onHoverContent: string;
  onHoverContentDisabled: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement> | undefined;
}
