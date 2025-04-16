// Types
import { ChangeEventHandler } from "react";

export default interface CheckboxFormControlProps {
  labelContent: string;

  entityProperty: boolean;
  onEntityPropertyValueChange: ChangeEventHandler<HTMLInputElement> | undefined;
}
