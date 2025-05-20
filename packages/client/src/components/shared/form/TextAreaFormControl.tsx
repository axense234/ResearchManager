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
  readOnly,
}) => {
  return (
    <div className={textAreaFormControlStyles.textAreaFormControlContainer}>
      {!hideLabel && <label htmlFor={labelContent}>{labelContent}</label>}
      <textarea
        name={labelContent}
        onChange={onEntityPropertyValueChange}
        maxLength={maxInputLength}
        value={entityProperty}
        readOnly={readOnly}
      />
    </div>
  );
};

export default TextAreaFormControl;
