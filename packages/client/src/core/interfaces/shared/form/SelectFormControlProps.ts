// Types
import { ChangeEventHandler } from "react";

export type SelectFormControlEntityPropertyType = { label: string; value: any };

export interface SelectFormControlProps {
  labelContent: string;
  entityProperty: SelectFormControlEntityPropertyType[];
  noEntityPropertyMessage: string;
  onEntityPropertyValueChange:
    | ChangeEventHandler<HTMLSelectElement>
    | undefined;
}
