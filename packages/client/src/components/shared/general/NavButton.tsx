// React
import { FC, useRef } from "react";
// Interfaces
import { NavButtonProps } from "@/core/interfaces";
// SCSS
import navButtonStyles from "@/scss/components/shared/general/NavButton.module.scss";
// React Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Hooks and Redux
import { useNavButtonTransition } from "@/hooks";
// Data
import { mainBlackColor, mainWhiteColor } from "@/data/general";

const NavButton: FC<NavButtonProps> = ({
  showButton,
  onNavButtonClick,
  direction,
  type = "dark",
}) => {
  const navButtonRef = useRef<HTMLDivElement>(null);

  const navButtonColor = type === "dark" ? mainBlackColor : mainWhiteColor;
  const navButtonIcon =
    direction === "next" ? <FaChevronRight /> : <FaChevronLeft />;
  const navButtonTitle = direction === "next" ? "Next" : "Previous";

  useNavButtonTransition(showButton, navButtonRef);

  return (
    <div
      className={navButtonStyles.navButtonContainer}
      style={{
        visibility: showButton ? "visible" : "hidden",
        color: navButtonColor,
      }}
      title={navButtonTitle}
      aria-label={navButtonTitle}
      ref={navButtonRef}
      onClick={onNavButtonClick}
    >
      {navButtonIcon}
    </div>
  );
};

export default NavButton;
