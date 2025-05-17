// React
import { FC } from "react";
// Interfaces
import { TextAreaFormControlProps } from "@/core/interfaces";
// SCSS
import textAreaFormControlStyles from "@/scss/components/shared/form/TextAreaFormControl.module.scss";

const TextAreaFormControl: FC<TextAreaFormControlProps> = ({
  entityProperty,
  labelContent,
  hideLabel,
  onEntityPropertyValueChange,
  maxInputLength,
}) => {
  return (
    <div className={textAreaFormControlStyles.textAreaFormControlContainer}>
      {!hideLabel && <label htmlFor={labelContent}>{labelContent}</label>}
      <textarea
        name={labelContent}
        maxLength={maxInputLength}
        value={entityProperty}
        onChange={onEntityPropertyValueChange}
      />
    </div>
  );
};

export default TextAreaFormControl;
