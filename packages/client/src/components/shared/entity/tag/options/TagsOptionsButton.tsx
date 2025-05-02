// React
import { FC } from "react";
// Interfaces
import { TagsOptionsButtonProps } from "@/core/interfaces";
// SCSS
import tagsOptionsButtonStyles from "@/scss/components/shared/entity/tag/options/TagsOptionsButton.module.scss";

const TagsOptionsButton: FC<TagsOptionsButtonProps> = ({
  showButton,
  onButtonClickFunction,
  buttonLabel,
  buttonColor,
}) => {
  if (showButton) {
    return (
      <button
        className={tagsOptionsButtonStyles.tagsOptionsButtonContainer}
        style={{ color: buttonColor }}
        onClick={onButtonClickFunction}
        title={buttonLabel}
        aria-label={buttonLabel}
      >
        {buttonLabel}
      </button>
    );
  }
  return null;
};

export default TagsOptionsButton;
