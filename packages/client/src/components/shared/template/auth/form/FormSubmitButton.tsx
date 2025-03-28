// Interfaces
import { FormSubmitButtonProps } from "@/core/interfaces";
import { FC } from "react";
// SCSS
import formSubmitButtonStyles from "@/scss/components/shared/template/auth/form/FormSubmitButton.module.scss";

const FormSubmitButton: FC<FormSubmitButtonProps> = ({
  content,
  disabled,
  onClickFunction,
  onHoverContent,
}) => {
  return (
    <button
      className={formSubmitButtonStyles.formSubmitButtonContainer}
      disabled={disabled}
      title={onHoverContent || content}
      aria-label={onHoverContent || content}
      type="submit"
      onClick={onClickFunction}
    >
      {content}
    </button>
  );
};

export default FormSubmitButton;
