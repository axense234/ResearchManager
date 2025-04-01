// Interfaces
import { FormSubmitButtonProps } from "@/core/interfaces";
import { FC } from "react";
// SCSS
import functionalButtonStyles from "@/scss/components/shared/general/FunctionalButton.module.scss";

const FunctionalButton: FC<FormSubmitButtonProps> = ({
  content,
  disabled,
  onClickFunction,
  onHoverContent,
  onHoverContentDisabled,
}) => {
  return (
    <button
      className={functionalButtonStyles.functionalButtonContainer}
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

export default FunctionalButton;
