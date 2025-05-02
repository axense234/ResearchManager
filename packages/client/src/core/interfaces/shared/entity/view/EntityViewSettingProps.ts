// Types
import { ChangeEventHandler } from "react";

export interface EntityViewSettingProps {
  value: boolean;
  onValueChange: ChangeEventHandler<HTMLInputElement>;
  labelContent: string;
  id: string;
}
