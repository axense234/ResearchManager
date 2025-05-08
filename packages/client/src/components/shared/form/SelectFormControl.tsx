// React
import { FC } from "react";
// Interfaces
import { SelectFormControlProps } from "@/core/interfaces";
// SCSS
import selectFormControlStyles from "@/scss/components/shared/form/SelectFormControl.module.scss";

const SelectFormControl: FC<SelectFormControlProps> = ({
  entityProperty,
  onEntityPropertyValueChange,
  labelContent,
}) => {
  return (
    <div className={selectFormControlStyles.selectFormControlContainer}>
      <label htmlFor={labelContent}>{labelContent}</label>
      <select
        name={labelContent}
        id={labelContent}
        onChange={onEntityPropertyValueChange}
      >
        {entityProperty.map((property) => {
          return <option key={property}>{property}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectFormControl;
