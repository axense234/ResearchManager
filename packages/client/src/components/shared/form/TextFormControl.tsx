// Interfaces
import { TextFormControlProps } from "@/core/interfaces";
import { FC } from "react";
// SCSS
import textFormControlStyles from "@/scss/components/shared/form/TextFormControl.module.scss";
// Data
import { mainBlackColor, mainWhiteColor } from "@/data/static";

const TextFormControl: FC<TextFormControlProps> = ({
  entityProperty,
  onEntityPropertyValueChange,
  type,
  labelContent,
  labelColorType,
  labelFontSize,
  minInputSize,
  maxInputSize,
  minInputLength,
  maxInputLength,
  inputHeight,
}) => {
  const labelColor =
    labelColorType === "dark" ? mainBlackColor : mainWhiteColor;

  return (
    <div className={textFormControlStyles.textFormControlContainer}>
      <label
        htmlFor={labelContent}
        style={{ color: labelColor, fontSize: labelFontSize }}
      >
        {labelContent}
      </label>
      <input
        type={type}
        name={labelContent}
        min={minInputSize}
        max={maxInputSize}
        minLength={minInputLength}
        maxLength={maxInputLength}
        value={entityProperty as string | number}
        onChange={onEntityPropertyValueChange}
        style={{ height: inputHeight }}
      />
    </div>
  );
};

export default TextFormControl;
