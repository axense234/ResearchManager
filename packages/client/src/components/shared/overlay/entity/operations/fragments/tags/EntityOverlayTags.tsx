// Interfaces
import { FC, useState } from "react";
import { EntityOverlayTagsProps } from "@/core/interfaces";
// SCSS
import entityOverlayTagsStyles from "@/scss/components/shared/overlay/entity/operations/fragments/tags/EntityOverlayTags.module.scss";
// Data
import {
  DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN,
  MAX_ENTITY_CONTAINER_TAGS_SHOWN,
} from "@/data/general";
// Components
import EntityOverlayTagsList from "./EntityOverlayTagsList";
import TagsOptions from "@/components/shared/entity/tag/options/TagsOptions";

const EntityOverlayTags: FC<EntityOverlayTagsProps> = ({
  tags,
  dtoUpdateFunction,
}) => {
  const [showAllTags, setShowAllTags] = useState<boolean>(false);

  const shownTagsCount = showAllTags
    ? MAX_ENTITY_CONTAINER_TAGS_SHOWN
    : DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN;

  return (
    <div className={entityOverlayTagsStyles.tagsContainer}>
      <h6>Tags:</h6>
      <div className={entityOverlayTagsStyles.tagsContent}>
        <EntityOverlayTagsList
          shownTags={tags}
          shownTagsCount={shownTagsCount}
        />
        <TagsOptions
          tags={tags}
          onRemoveTagFunction={dtoUpdateFunction}
          showAllTags={showAllTags}
          setShowAllTags={setShowAllTags}
        />
      </div>
    </div>
  );
};

export default EntityOverlayTags;
