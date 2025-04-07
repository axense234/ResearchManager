// Interfaces
import { FormSubmitButtonProps } from "@/core/interfaces";
import { FC } from "react";
// SCSS
import formSubmitButtonStyles from "@/scss/components/shared/template/auth/form/FormSubmitButton.module.scss";
// Data
import { mainLightBlueColor, mainWhiteColor } from "@/data/general";

const FormSubmitButton: FC<FormSubmitButtonProps> = ({
  content,
  disabled,
  onClickFunction,
  onHoverContent,
  onHoverContentDisabled,
  backgroundColorType = "dark",
}) => {
  const backgroundColor =
    backgroundColorType === "dark" ? mainLightBlueColor : mainWhiteColor;

  return (
    <button
      className={formSubmitButtonStyles.formSubmitButtonContainer}
      disabled={disabled}
      title={disabled ? onHoverContentDisabled : onHoverContent}
      aria-label={disabled ? onHoverContentDisabled : onHoverContent}
      type="submit"
      onClick={onClickFunction}
      style={{ backgroundColor }}
    >
      {content}
    </button>
  );
};

export default FormSubmitButton;
