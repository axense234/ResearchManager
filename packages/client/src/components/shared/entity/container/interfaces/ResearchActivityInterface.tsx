// Interfaces
import { FC } from "react";
import { EntityContainerInterfaceProps } from "@/core/interfaces";
// SCSS
import entityContainerStyles from "@/scss/components/shared/entity/container/EntityContainer.module.scss";
// Fragments
import EntityContainerTags from "../fragments/EntityContainerTags";
import EntityContainerLabel from "../fragments/EntityContainerLabel";
import EntityContainerOptions from "../fragments/EntityContainerOptions";

const ResearchActivityInterface: FC<EntityContainerInterfaceProps> = ({
  containerType,
}) => {
  return (
    <div className={entityContainerStyles.entityContainer}>
      <EntityContainerTags containerType={containerType} />
      <EntityContainerLabel containerType={containerType} />
      <EntityContainerOptions containerType={containerType} />
    </div>
  );
};

export default ResearchActivityInterface;
