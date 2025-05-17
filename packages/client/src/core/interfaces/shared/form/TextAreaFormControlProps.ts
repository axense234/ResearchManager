import { ChangeEventHandler } from "react";

export interface TextAreaFormControlProps {
  labelContent?: string;
  hideLabel?: boolean;

  maxInputLength?: number;

  entityProperty: string | number | undefined;
  onEntityPropertyValueChange: ChangeEventHandler<HTMLTextAreaElement>;
}
