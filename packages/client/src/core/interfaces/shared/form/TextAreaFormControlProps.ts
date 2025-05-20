import { ChangeEventHandler } from "react";

export interface TextAreaFormControlProps {
  labelContent?: string;
  hideLabel?: boolean;

  maxInputLength?: number;

  readOnly?: boolean;

  entityProperty: string | number | undefined;
  onEntityPropertyValueChange: ChangeEventHandler<HTMLTextAreaElement>;
}
