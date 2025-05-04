// React
import { FC } from "react";
// Interfaces
import { FunctionalButtonProps } from "@/core/interfaces";
// SCSS
import functionalButtonStyles from "@/scss/components/shared/general/FunctionalButton.module.scss";
// Data
import {
  buttonHeading1,
  buttonHeading2,
  cancelGrayColor,
  createGreenColor,
  deleteRedColor,
  mainDarkBlueColor,
  mockBrownColor,
  resumeYellowColor,
} from "@/data/general";

const FunctionalButton: FC<FunctionalButtonProps> = ({
  content,
  disabled,
  onClickFunction,
  onHoverContent,
  onHoverContentDisabled,
  colorScheme = "green",
  size = "medium",
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
    case "darkBlue":
      colorSchemeShown = mainDarkBlueColor;
      break;
    case "gray":
      colorSchemeShown = cancelGrayColor;
      break;
    default:
      throw new Error("Invalid colorScheme on FunctionalButton.");
  }

  const buttonFontSize = size === "small" ? buttonHeading2 : buttonHeading1;
  const buttonPadding = size === "small" ? "0.25rem 0.75rem" : "0.5rem 1rem";
  const buttonBorderWidth = size === "small" ? "2px" : "3px";
  const buttonMinWidth = size === "small" ? "1rem" : "5rem";

  return (
    <button
      className={functionalButtonStyles.functionalButtonContainer}
      disabled={disabled}
      title={disabled ? onHoverContentDisabled : onHoverContent}
      aria-label={disabled ? onHoverContentDisabled : onHoverContent}
      type="submit"
      onClick={onClickFunction}
      style={{
        borderColor: colorSchemeShown,
        borderWidth: buttonBorderWidth,
        padding: buttonPadding,
        color: colorSchemeShown,
        fontSize: buttonFontSize,
        minWidth: buttonMinWidth,
      }}
    >
      {content}
    </button>
  );
};

export default FunctionalButton;
