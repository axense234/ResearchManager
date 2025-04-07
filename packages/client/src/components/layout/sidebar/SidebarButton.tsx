// Interfaces
import { FC } from "react";
import { SidebarButtonProps } from "@/core/interfaces/layout";
// i18n
import { Link } from "@/i18n/routing";
// SCSS
import sidebarButtonStyles from "@/scss/components/layout/sidebar/SidebarButton.module.scss";

const SidebarButton: FC<SidebarButtonProps> = ({ button, onClickFunction }) => {
  const { buttonType, buttonLabel, icon, buttonDest } = button;

  if (buttonType === "link") {
    return (
      <Link
        href={buttonDest as string as any}
        title={buttonLabel}
        aria-label={buttonLabel}
        className={sidebarButtonStyles.sidebarButtonContainer}
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
        className={sidebarButtonStyles.sidebarButtonContainer}
        onClick={onClickFunction}
      >
        {icon}
        <span>{buttonLabel}</span>
      </button>
    );
  }
};

export default SidebarButton;
