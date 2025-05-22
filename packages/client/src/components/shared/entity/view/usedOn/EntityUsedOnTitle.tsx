// React
import { FC } from "react";
// Interfaces
import { EntityUsedOnTitleProps } from "@/core/interfaces";
// SCSS
import entityUsedOnTitleStyles from "@/scss/components/shared/entity/view/usedOn/EntityUsedOnTitle.module.scss";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";
// Components
import EntityViewSectionControl from "../EntityViewSectionControl";

const EntityUsedOnTitle: FC<EntityUsedOnTitleProps> = ({
  title,
  darkMode,
  setShowEntities,
  showEntities,
  showSectionControl,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entityUsedOnTitleStyles.entityUsedOnTitleContainer}>
      <div className={entityUsedOnTitleStyles.entityUsedOnTitleContent}>
        <h6 style={{ color: textColor }}>{title}</h6>
        {showSectionControl && (
          <EntityViewSectionControl
            showSectionContent={showEntities}
            setShowSectionContent={setShowEntities}
          />
        )}
      </div>
      <hr style={{ backgroundColor: textColor }} />
    </div>
  );
};

export default EntityUsedOnTitle;
