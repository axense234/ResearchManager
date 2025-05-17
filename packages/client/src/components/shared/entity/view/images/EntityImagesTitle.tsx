// React
import { FC } from "react";
// Interfaces
import { EntityImagesTitleProps } from "@/core/interfaces";
// SCSS
import entityImagesTitleStyles from "@/scss/components/shared/entity/view/images/EntityImagesTitle.module.scss";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";
// Components
import EntityViewSectionControl from "../EntityViewSectionControl";

const EntityImagesTitle: FC<EntityImagesTitleProps> = ({
  title,
  darkMode,
  setShowImages,
  showImages,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entityImagesTitleStyles.entityImagesTitleContainer}>
      <div className={entityImagesTitleStyles.entityImagesTitleContent}>
        <h6 style={{ color: textColor }}>{title}</h6>
        <EntityViewSectionControl
          showSectionContent={showImages}
          setShowSectionContent={setShowImages}
        />
      </div>
      <hr style={{ backgroundColor: textColor }} />
    </div>
  );
};

export default EntityImagesTitle;
