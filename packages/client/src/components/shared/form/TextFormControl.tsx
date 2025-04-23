// Interfaces
import { TextFormControlProps } from "@/core/interfaces";
import { FC } from "react";
// SCSS
import textFormControlStyles from "@/scss/components/shared/form/TextFormControl.module.scss";
// Data
import {
  mainBlackColor,
  mainLightBlueColor,
  mainWhiteColor,
} from "@/data/general";

const TextFormControl: FC<TextFormControlProps> = ({
  entityProperty,
  onEntityPropertyValueChange,
  type,
  labelContent,
  labelColorType = "light",
  labelFontSize,
  minInputSize,
  maxInputSize,
  minInputLength,
  maxInputLength,
  inputHeight,
  border,
  placeholderContent,
  inputColorType = "dark",
  flexDirection = "row",
}) => {
  const labelColor =
    labelColorType === "dark" ? mainBlackColor : mainWhiteColor;

  const inputColor =
    inputColorType === "dark" ? mainLightBlueColor : mainWhiteColor;

  return (
    <div
      className={textFormControlStyles.textFormControlContainer}
      style={{
        flexDirection,
        alignItems: type === "color" ? "flex-start" : "center",
      }}
    >
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
        placeholder={placeholderContent}
        onChange={onEntityPropertyValueChange}
        style={{
          height: inputHeight,
          border,
          backgroundColor: inputColor,
        }}
      />
    </div>
  );
};

export default TextFormControl;
