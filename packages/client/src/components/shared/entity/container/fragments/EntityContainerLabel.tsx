// Interfaces
import { FC } from "react";
import { EntityContainerLabelProps } from "@/core/interfaces";
// SCSS
import entityContainerLabelStyles from "@/scss/components/shared/entity/container/fragments/EntityContainerLabel.module.scss";

const EntityContainerLabel: FC<EntityContainerLabelProps> = ({
  entityRanking,
  entityResearchPoints,
  entityTitle,
}) => {
  return (
    <div className={entityContainerLabelStyles.entityContainerLabelContainer}>
      <div className={entityContainerLabelStyles.entityContainerLabelTitle}>
        <span>#{entityRanking}</span>
        <h5>{entityTitle}</h5>
      </div>
      <hr />
      <p>{entityResearchPoints} research points</p>
    </div>
  );
};

export default EntityContainerLabel;
