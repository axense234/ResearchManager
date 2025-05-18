// React
import { FC } from "react";
// SCSS
import imageFormControlStyles from "@/scss/components/shared/form/ImageFormControl.module.scss";
// Interfaces
import { ImageFormControlProps } from "@/core/interfaces";
// Data
import { cancelGrayColor, createGreenColor } from "@/data/general";

const ImageFormControl: FC<ImageFormControlProps> = ({
  onEntityPropertyValueChange,
  type,
  disabled,
  labelContent,
  onHoverContent,
  onHoverDisabledContent,
}) => {
  return (
    <div className={imageFormControlStyles.imageFormControlContainer}>
      <label
        htmlFor={labelContent}
        title={disabled ? onHoverDisabledContent : onHoverContent}
        aria-label={disabled ? onHoverDisabledContent : onHoverContent}
        style={{ color: disabled ? cancelGrayColor : createGreenColor }}
      >
        {labelContent}
      </label>
      <input
        disabled={disabled}
        type="file"
        id={labelContent}
        name={labelContent}
        multiple={type === "multiple"}
        onChange={onEntityPropertyValueChange}
      />
    </div>
  );
};

export default ImageFormControl;
