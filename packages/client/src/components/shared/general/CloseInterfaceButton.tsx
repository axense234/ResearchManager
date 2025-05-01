// React
import { FC } from "react";
import { CloseInterfaceButtonProps } from "@/core/interfaces";
// React Icons
import { FaWindowClose } from "react-icons/fa";
// SCSS
import closeInterfaceButtonStyles from "@/scss/components/shared/general/CloseInterfaceButton.module.scss";
// Data
import { mainBlackColor, mainPastelRedColor } from "@/data/general";

const CloseInterfaceButton: FC<CloseInterfaceButtonProps> = ({
  closeInterfaceFunction,
  title,
  color,
  size,
}) => {
  const buttonColor =
    color === "mainBlack" ? mainBlackColor : mainPastelRedColor;

  const buttonSize = size === "large" ? "4rem" : "2rem";

  return (
    <div
      className={closeInterfaceButtonStyles.closeInterfaceButtonContainer}
      onClick={closeInterfaceFunction}
    >
      <FaWindowClose
        title={title}
        aria-label={title}
        style={{ color: buttonColor, fontSize: buttonSize }}
      />
    </div>
  );
};

export default CloseInterfaceButton;
