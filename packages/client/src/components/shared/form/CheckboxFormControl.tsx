// Interfaces
import { FC } from "react";
import CheckboxFormControlProps from "@/core/interfaces/shared/form/CheckboxFormControlProps";
// SCSS
import checkboxFormControlStyles from "@/scss/components/shared/form/CheckboxFormControl.module.scss";

const CheckboxFormControl: FC<CheckboxFormControlProps> = ({
  labelContent,
  entityProperty,
  onEntityPropertyValueChange,
}) => {
  return (
    <div
      className={checkboxFormControlStyles.checkboxFormControlContainer}
      title={entityProperty ? "Stop displaying Examples." : "Show Examples"}
      aria-label={
        entityProperty ? "Stop displaying Examples." : "Show Examples"
      }
    >
      <label htmlFor={labelContent}>{labelContent}</label>
      <input
        type="checkbox"
        name={labelContent}
        id={labelContent}
        value={entityProperty ? "true" : "false"}
        onChange={onEntityPropertyValueChange}
        checked={entityProperty}
      />
    </div>
  );
};

export default CheckboxFormControl;
