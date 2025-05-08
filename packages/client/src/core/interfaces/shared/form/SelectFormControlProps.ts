// Types
import { ChangeEventHandler } from "react";

export interface SelectFormControlProps {
  labelContent: string;
  entityProperty: string[];
  onEntityPropertyValueChange:
    | ChangeEventHandler<HTMLSelectElement>
    | undefined;
}
