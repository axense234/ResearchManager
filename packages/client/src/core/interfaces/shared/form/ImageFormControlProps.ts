// Types
import { ChangeEventHandler } from "react";

export interface ImageFormControlProps {
  onEntityPropertyValueChange: ChangeEventHandler<HTMLInputElement>;
  type: "single" | "multiple";
  disabled: boolean;

  labelContent: string;
  onHoverContent: string;
  onHoverDisabledContent: string;
}
