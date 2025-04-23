// Interfaces
import { FC } from "react";
import CheckboxFormControlProps from "@/core/interfaces/shared/form/CheckboxFormControlProps";
// SCSS
import checkboxFormControlStyles from "@/scss/components/shared/form/CheckboxFormControl.module.scss";

const CheckboxFormControl: FC<CheckboxFormControlProps> = ({
  labelContent,
  entityProperty,
  onEntityPropertyValueChange,
  id,
}) => {
  return (
    <div
      className={checkboxFormControlStyles.checkboxFormControlContainer}
      title={entityProperty ? "Stop displaying Examples." : "Show Examples"}
      aria-label={
        entityProperty ? "Stop displaying Examples." : "Show Examples"
      }
    >
      <label htmlFor={id}>{labelContent}</label>
      <input
        type="checkbox"
        name={id}
        id={id}
        value={entityProperty ? "true" : "false"}
        onChange={onEntityPropertyValueChange}
        checked={entityProperty}
      />
    </div>
  );
};

export default CheckboxFormControl;
