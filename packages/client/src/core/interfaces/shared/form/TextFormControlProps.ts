// Types
import { ChangeEventHandler } from "react";

export interface TextFormControlProps {
  labelColorType?: "dark" | "light";
  inputColorType?: "dark" | "light";
  labelFontSize?: number;

  minInputSize?: number;
  maxInputSize?: number;
  maxInputLength?: number;
  minInputLength?: number;

  inputHeight?: number;

  border?: string;

  placeholderContent?: string;

  flexDirection?: "column" | "row";

  labelContent: string;
  type:
    | "email"
    | "text"
    | "password"
    | "number"
    | "url"
    | "datetime-local"
    | "date"
    | "time"
    | "color";

  entityProperty: string | number | undefined | Date;
  onEntityPropertyValueChange: ChangeEventHandler<HTMLInputElement>;
}
