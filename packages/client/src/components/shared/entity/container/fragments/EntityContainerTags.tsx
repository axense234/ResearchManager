// Interfaces
import { FC } from "react";
import { EntityContainerFragmentInterfaceProps } from "@/core/interfaces";
// SCSS
import entityContainerTagsStyles from "@/scss/components/shared/entity/container/fragments/EntityContainerTags.module.scss";

const EntityContainerTags: FC<EntityContainerFragmentInterfaceProps> = ({
  containerType,
}) => {
  return (
    <div className={entityContainerTagsStyles.entityContainerTagsContainer}>
      tags
    </div>
  );
};

export default EntityContainerTags;
