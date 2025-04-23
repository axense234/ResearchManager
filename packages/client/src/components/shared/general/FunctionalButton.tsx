// Interfaces
import { FC } from "react";
import { FormSubmitButtonProps } from "@/core/interfaces";
// SCSS
import functionalButtonStyles from "@/scss/components/shared/general/FunctionalButton.module.scss";
// Data
import {
  createGreenColor,
  deleteRedColor,
  mockBrownColor,
  resumeYellowColor,
} from "@/data/general";

const FunctionalButton: FC<FormSubmitButtonProps> = ({
  content,
  disabled,
  onClickFunction,
  onHoverContent,
  onHoverContentDisabled,
  colorScheme = "green",
}) => {
  let colorSchemeShown = createGreenColor;
  switch (colorScheme) {
    case "green":
      colorSchemeShown = createGreenColor;
      break;
    case "red":
      colorSchemeShown = deleteRedColor;
      break;
    case "yellow":
      colorSchemeShown = resumeYellowColor;
      break;
    case "brown":
      colorSchemeShown = mockBrownColor;
      break;
  }

  return (
    <button
      className={functionalButtonStyles.functionalButtonContainer}
      disabled={disabled}
      title={disabled ? onHoverContentDisabled : onHoverContent}
      aria-label={disabled ? onHoverContentDisabled : onHoverContent}
      type="submit"
      onClick={onClickFunction}
      style={{ borderColor: colorSchemeShown, color: colorSchemeShown }}
    >
      {content}
    </button>
  );
};

export default FunctionalButton;
