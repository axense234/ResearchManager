// React
import { FC } from "react";
// Interfaces
import { EntityContainerLabelProps } from "@/core/interfaces";
// SCSS
import entityContainerLabelStyles from "@/scss/components/shared/entity/container/fragments/EntityContainerLabel.module.scss";
// Data
import {
  mainBlackColor,
  mainWhiteColor,
  secondaryWhiteColor,
} from "@/data/general";

const EntityContainerLabel: FC<EntityContainerLabelProps> = ({
  entityRanking,
  entityResearchPoints,
  entityTitle,
  darkMode,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;
  const entityRankingBackgroundColor = darkMode
    ? secondaryWhiteColor
    : mainBlackColor;

  return (
    <div className={entityContainerLabelStyles.entityContainerLabelContainer}>
      <div className={entityContainerLabelStyles.entityContainerLabelTitle}>
        <span
          style={{
            color: textColor,
            backgroundColor: entityRankingBackgroundColor,
            borderColor: textColor,
          }}
        >
          #{entityRanking}
        </span>
        <h5 style={{ color: textColor }}>{entityTitle}</h5>
      </div>
      <hr style={{ backgroundColor: textColor }} />
      <p style={{ color: textColor }}>{entityResearchPoints} research points</p>
    </div>
  );
};

export default EntityContainerLabel;
