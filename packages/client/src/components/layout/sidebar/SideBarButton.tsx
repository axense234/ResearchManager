// React
import { FC, useRef } from "react";
// Interfaces
import { SideBarButtonProps } from "@/core/interfaces/layout";
// i18n
import { Link } from "@/i18n/routing";
// SCSS
import sideBarButtonStyles from "@/scss/components/layout/sidebar/SideBarButton.module.scss";
// Hooks
import { useSelectOnButtonClickFunction } from "@/hooks";

const SideBarButton: FC<SideBarButtonProps> = ({ button }) => {
  const { buttonType, buttonLabel, icon, buttonDest } = button;

  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const onButtonClickFunction = useSelectOnButtonClickFunction(
    buttonLabel,
    "sidebar",
  );

  if (buttonType === "link") {
    return (
      <Link
        ref={buttonRef as any}
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
        ref={buttonRef as any}
        title={buttonLabel}
        aria-label={buttonLabel}
        className={sideBarButtonStyles.sideBarButtonContainer}
        onClick={onButtonClickFunction}
      >
        {icon}
        <span>{buttonLabel}</span>
      </button>
    );
  }
};

export default SideBarButton;
