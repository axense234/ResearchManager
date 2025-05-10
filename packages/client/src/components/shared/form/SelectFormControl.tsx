// React
import { FC } from "react";
// Interfaces
import { SelectFormControlProps } from "@/core/interfaces";
// SCSS
import selectFormControlStyles from "@/scss/components/shared/form/SelectFormControl.module.scss";

const SelectFormControl: FC<SelectFormControlProps> = ({
  entityProperty,
  noEntityPropertyMessage,
  onEntityPropertyValueChange,
  labelContent,
}) => {
  return (
    <div className={selectFormControlStyles.selectFormControlContainer}>
      <label htmlFor={labelContent}>{labelContent}</label>
      {entityProperty.length > 0 ? (
        <select
          name={labelContent}
          id={labelContent}
          onChange={onEntityPropertyValueChange}
        >
          {entityProperty.map((property) => {
            return (
              <option key={property.value} value={property.value}>
                {property.label}
              </option>
            );
          })}
        </select>
      ) : (
        <p title={noEntityPropertyMessage} aria-label={noEntityPropertyMessage}>
          {noEntityPropertyMessage}
        </p>
      )}
    </div>
  );
};

export default SelectFormControl;
