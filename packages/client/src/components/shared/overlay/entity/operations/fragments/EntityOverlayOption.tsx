// React
import { FC } from "react";
// Interfaces
import { EntityOverlayOptionProps } from "@/core/interfaces";
// SCSS
import entityOverlayOptionStyles from "@/scss/components/shared/overlay/entity/operations/fragments/EntityOverlayOptions.module.scss";
// React Icons
import {
  FaEdit,
  FaEye,
  FaPause,
  FaPlay,
  FaStop,
  FaTrash,
} from "react-icons/fa";
// Data
import {
  cancelGrayColor,
  createGreenColor,
  deleteRedColor,
  pauseGreenColor,
  viewPurpleColor,
} from "@/data/general";

const EntityOverlayOption: FC<EntityOverlayOptionProps> = ({
  type,
  onClickFunction,
}) => {
  let OptionIcon = FaEye;
  let optionTitle = "View";
  let optionColor = viewPurpleColor;

  switch (type) {
    case "view":
      OptionIcon = FaEye;
      optionTitle = "View";
      optionColor = viewPurpleColor;
      break;
    case "edit":
      OptionIcon = FaEdit;
      optionTitle = "Edit";
      optionColor = createGreenColor;
      break;
    case "delete":
      OptionIcon = FaTrash;
      optionTitle = "Delete";
      optionColor = deleteRedColor;
      break;
    case "pause":
      OptionIcon = FaPause;
      optionTitle = "Pause Research";
      optionColor = cancelGrayColor;
      break;
    case "resume":
      OptionIcon = FaPlay;
      optionTitle = "Resume Research";
      optionColor = createGreenColor;
      break;
    case "finish":
      optionTitle = "Finish Research";
      OptionIcon = FaStop;
      optionColor = deleteRedColor;
      break;
    default:
      throw new Error("Invalid type.");
  }

  return (
    <div
      className={entityOverlayOptionStyles.overlayOptionContainer}
      style={{ backgroundColor: optionColor }}
    >
      <OptionIcon
        onClick={onClickFunction}
        title={optionTitle}
        aria-label={optionTitle}
      />
    </div>
  );
};

export default EntityOverlayOption;
