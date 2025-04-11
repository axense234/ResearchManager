// Interfaces
import { FC } from "react";
import { ExitOverlayButtonProps } from "@/core/interfaces/shared/overlay/ExitOverlayButtonProps";
// React Icons
import { FaWindowClose } from "react-icons/fa";
// SCSS
import exitOverlayButtonStyles from "@/scss/components/shared/overlay/ExitOverlayButton.module.scss";

const ExitOverlayButton: FC<ExitOverlayButtonProps> = ({
  closeOverlayFunction,
}) => {
  return (
    <div
      className={exitOverlayButtonStyles.exitOverlayButtonContainer}
      onClick={closeOverlayFunction}
    >
      <FaWindowClose title="Close Overlay" aria-label="Close Overlay" />
    </div>
  );
};

export default ExitOverlayButton;
