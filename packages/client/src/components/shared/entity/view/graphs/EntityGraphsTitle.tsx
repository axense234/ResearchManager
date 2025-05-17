// React
import { FC } from "react";
// Interfaces
import { EntityGraphsTitleProps } from "@/core/interfaces";
// Components
import EntityViewSectionControl from "../EntityViewSectionControl";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";
// SCSS
import entityGraphsTitleStyles from "@/scss/components/shared/entity/view/graphs/EntityGraphsTitle.module.scss";

const EntityGraphsTitle: FC<EntityGraphsTitleProps> = ({
  title,
  darkMode,
  setShowGraph,
  showGraph,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entityGraphsTitleStyles.graphsTitleContainer}>
      <div className={entityGraphsTitleStyles.graphsTitleContent}>
        <h6 style={{ color: textColor }}>{title}</h6>
        <EntityViewSectionControl
          showSectionContent={showGraph}
          setShowSectionContent={setShowGraph}
        />
      </div>
      <hr style={{ backgroundColor: textColor }} />
    </div>
  );
};

export default EntityGraphsTitle;
