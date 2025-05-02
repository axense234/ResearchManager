// React
import { FC } from "react";
// Interfaces
import { EntityImagesTitleProps } from "@/core/interfaces";
// SCSS
import entityImagesTitleStyles from "@/scss/components/shared/entity/view/images/EntityImagesTitle.module.scss";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";

const EntityImagesTitle: FC<EntityImagesTitleProps> = ({ title, darkMode }) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entityImagesTitleStyles.entityImagesTitleContainer}>
      <h6 style={{ color: textColor }}>{title}</h6>
      <hr style={{ backgroundColor: textColor }} />
    </div>
  );
};

export default EntityImagesTitle;
