// Interfaces
import { FC } from "react";
import { SidebarButtonContentType } from "@/core/types";
// i18n
import { Link } from "@/i18n/routing";
// SCSS
import sidebarButtonStyles from "@/scss/components/layout/sidebar/SidebarButton.module.scss";

const SidebarButton: FC<SidebarButtonContentType> = ({
  buttonLabel,
  buttonType,
  icon,
  buttonDest,
}) => {
  if (buttonType === "link") {
    return (
      <li className={sidebarButtonStyles.sidebarButtonContainer}>
        <Link
          href={buttonDest as string as any}
          title={buttonLabel}
          aria-label={buttonLabel}
        >
          {icon}
          <span>{buttonLabel}</span>
        </Link>
      </li>
    );
  } else if (buttonType === "functional") {
    return (
      <li className={sidebarButtonStyles.sidebarButtonContainer}>
        <button type="button" title={buttonLabel} aria-label={buttonLabel}>
          {icon}
          <span>{buttonLabel}</span>
        </button>
      </li>
    );
  }
};

export default SidebarButton;
