// Interfaces
import { FC } from "react";
import { OAuthButtonProps } from "@/core/interfaces";
// SCSS
import oAuthButtonStyles from "@/scss/components/shared/general/OAuthButton.module.scss";

const OAuthButton: FC<OAuthButtonProps> = ({
  optionType,
  reactIcon,
  pageType,
  onButtonClick,
}) => {
  const oAuthButtonLabel = optionType === "github" ? "Github" : "Google";

  const oAuthButtonTitle =
    pageType === "signin"
      ? `Sign in through ${oAuthButtonLabel}!`
      : `Sign up through ${oAuthButtonLabel}!`;

  return (
    <button
      className={oAuthButtonStyles.oAuthButtonContainer}
      title={oAuthButtonTitle}
      aria-label={oAuthButtonTitle}
      type="button"
      onClick={onButtonClick}
    >
      {reactIcon}
      <span>{oAuthButtonLabel}</span>
    </button>
  );
};

export default OAuthButton;
