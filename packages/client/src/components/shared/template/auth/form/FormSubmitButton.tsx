// React
import { FC } from "react";
// Interfaces
import { FormSubmitButtonProps } from "@/core/interfaces";
// SCSS
import formSubmitButtonStyles from "@/scss/components/shared/template/auth/form/FormSubmitButton.module.scss";

const FormSubmitButton: FC<FormSubmitButtonProps> = ({
  content,
  disabled,
  onClickFunction,
  onHoverContent,
  onHoverContentDisabled,
}) => {
  return (
    <button
      className={formSubmitButtonStyles.formSubmitButtonContainer}
      disabled={disabled}
      title={disabled ? onHoverContentDisabled : onHoverContent}
      aria-label={disabled ? onHoverContentDisabled : onHoverContent}
      type="submit"
      onClick={onClickFunction}
    >
      {content}
    </button>
  );
};

export default FormSubmitButton;
