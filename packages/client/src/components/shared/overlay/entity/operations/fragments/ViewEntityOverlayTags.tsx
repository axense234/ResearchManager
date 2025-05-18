// React
import { FC, useState } from "react";
// Interfaces
import { ViewEntityOverlayTagsProps } from "@/core/interfaces";
// SCSS
import viewEntityOverlayTagsStyles from "@/scss/components/shared/overlay/entity/operations/fragments/ViewEntityOverlayTags.module.scss";
// Data
import {
  MAX_VIEW_ENTITY_OVERLAY_TAGS_SHOWN,
  DEFAULT_VIEW_ENTITY_OVERLAY_TAGS_SHOWN,
} from "@/data/general";
// Components
import TagsList from "@/components/shared/entity/tag/TagsList";
import TagsOptions from "@/components/shared/entity/tag/options/TagsOptions";

const ViewEntityOverlayTags: FC<ViewEntityOverlayTagsProps> = ({
  sourceTagsIds,
  tagSize,
}) => {
  const [showAllTags, setShowAllTags] = useState<boolean>(false);

  const tagsShownCount = showAllTags
    ? MAX_VIEW_ENTITY_OVERLAY_TAGS_SHOWN
    : DEFAULT_VIEW_ENTITY_OVERLAY_TAGS_SHOWN;

  return (
    <div className={viewEntityOverlayTagsStyles.viewOverlayTagsContainer}>
      <TagsList
        sourceTagsIds={sourceTagsIds}
        numberOfTagsShown={tagsShownCount}
        noTagsAvailableMessage="No Tags."
        containerType="view"
        tagSize={tagSize}
      />
      <TagsOptions
        sourceTagsIds={sourceTagsIds}
        showAllTags={showAllTags}
        setShowAllTags={setShowAllTags}
        containerType="view"
        location="overlay"
      />
    </div>
  );
};

export default ViewEntityOverlayTags;
