// Interfaces
import { FC, useState } from "react";
import { EntityContainerTagsProps } from "@/core/interfaces";
// SCSS
import entityContainerTagsStyles from "@/scss/components/shared/entity/container/fragments/EntityContainerTags.module.scss";
// Components
import TagsOptions from "../../tag/options/TagsOptions";
import TagsList from "../../tag/TagsList";
// Data
import {
  DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN,
  MAX_ENTITY_CONTAINER_TAGS_SHOWN,
} from "@/data/general";

const EntityContainerTags: FC<EntityContainerTagsProps> = ({
  sourceTagsIds,
  containerType,
  onAddTagFunction,
  onRemoveTagFunction,
  tagSize = "normal",
}) => {
  const [showAllTags, setShowAllTags] = useState<boolean>(false);

  const tagsShownCount = showAllTags
    ? MAX_ENTITY_CONTAINER_TAGS_SHOWN
    : DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN;

  return (
    <div className={entityContainerTagsStyles.entityContainerTagsContainer}>
      <TagsList
        sourceTagsIds={sourceTagsIds}
        numberOfTagsShown={tagsShownCount}
        noTagsAvailableMessage="No Tags."
        containerType={containerType}
        tagSize={tagSize}
      />
      <TagsOptions
        sourceTagsIds={sourceTagsIds}
        showAllTags={showAllTags}
        setShowAllTags={setShowAllTags}
        containerType={containerType}
        location="container"
        onRemoveTagFunction={onRemoveTagFunction}
        onAddTagFunction={onAddTagFunction}
      />
    </div>
  );
};

export default EntityContainerTags;
