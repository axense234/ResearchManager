// React
import { FC, useState } from "react";
// Interfaces
import { EntityOverlayTagsProps } from "@/core/interfaces";
// SCSS
import entityOverlayTagsStyles from "@/scss/components/shared/overlay/entity/operations/fragments/tags/EntityOverlayTags.module.scss";
// Data
import {
  DEFAULT_ENTITY_OVERLAY_TAGS_SHOWN,
  MAX_ENTITY_OVERLAY_TAGS_SHOWN,
} from "@/data/general";
// Components
import TagsOptions from "@/components/shared/entity/tag/options/TagsOptions";
import TagsList from "@/components/shared/entity/tag/TagsList";

const EntityOverlayTags: FC<EntityOverlayTagsProps> = ({
  sourceTagsIds,
  onAddTagFunction,
  onRemoveTagFunction,
}) => {
  const [showAllTags, setShowAllTags] = useState<boolean>(false);

  const shownTagsCount = showAllTags
    ? MAX_ENTITY_OVERLAY_TAGS_SHOWN
    : DEFAULT_ENTITY_OVERLAY_TAGS_SHOWN;

  return (
    <div className={entityOverlayTagsStyles.tagsContainer}>
      <h6>Tags:</h6>
      <div className={entityOverlayTagsStyles.tagsContent}>
        <TagsList
          sourceTagsIds={sourceTagsIds}
          numberOfTagsShown={shownTagsCount}
          noTagsAvailableMessage="No Tags selected. You should add some."
          containerType="entity"
        />
        <TagsOptions
          sourceTagsIds={sourceTagsIds}
          showAllTags={showAllTags}
          setShowAllTags={setShowAllTags}
          containerType="entity"
          location="overlay"
          onRemoveTagFunction={onRemoveTagFunction}
          onAddTagFunction={onAddTagFunction}
        />
      </div>
    </div>
  );
};

export default EntityOverlayTags;
