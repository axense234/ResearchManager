// Interfaces
import { FC } from "react";
import { SideBarButtonProps } from "@/core/interfaces/layout";
// i18n
import { Link } from "@/i18n/routing";
// SCSS
import sideBarButtonStyles from "@/scss/components/layout/sidebar/SideBarButton.module.scss";

const SideBarButton: FC<SideBarButtonProps> = ({ button, onClickFunction }) => {
  const { buttonType, buttonLabel, icon, buttonDest } = button;

  if (buttonType === "link") {
    return (
      <Link
        href={buttonDest as string as any}
        title={buttonLabel}
        aria-label={buttonLabel}
        className={sideBarButtonStyles.sideBarButtonContainer}
      >
        {icon}
        <span>{buttonLabel}</span>
      </Link>
    );
  } else if (buttonType === "functional") {
    return (
      <button
        type="button"
        title={buttonLabel}
        aria-label={buttonLabel}
        className={sideBarButtonStyles.sideBarButtonContainer}
        onClick={onClickFunction}
      >
        {icon}
        <span>{buttonLabel}</span>
      </button>
    );
  }
};

export default SideBarButton;
