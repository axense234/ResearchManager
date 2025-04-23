// Interfaces
import { FC, useState } from "react";
import { EntityOverlayTagsProps } from "@/core/interfaces";
// SCSS
import entityOverlayTagsStyles from "@/scss/components/shared/overlay/entity/operations/fragments/EntityOverlayTags.module.scss";
// Data
import {
  createGreenColor,
  DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN,
  MAX_ENTITY_CONTAINER_TAGS_SHOWN,
} from "@/data/general";
// Components
import TagComponent from "@/components/shared/entity/tag/TagComponent";

const EntityOverlayTags: FC<EntityOverlayTagsProps> = ({
  entityType,
  method,
  dto,
}) => {
  const [showAllTags, setShowAllTags] = useState<boolean>(false);

  const tagsShownCount = showAllTags
    ? MAX_ENTITY_CONTAINER_TAGS_SHOWN
    : DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN;

  return (
    <div className={entityOverlayTagsStyles.tagsContainer}>
      <h6>Tags:</h6>
      <ul className={entityOverlayTagsStyles.tagsList}>
        {dto.tags?.length > 0 ? (
          dto.tags?.slice(0, tagsShownCount).map((id) => {
            return <TagComponent tagId={id} key={id} containerType="entity" />;
          })
        ) : (
          <p>No Tags available. You should create some.</p>
        )}
        <div className={entityOverlayTagsStyles.tagsOptions}>
          {dto.tags?.length > DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN ? (
            <button
              className={entityOverlayTagsStyles.tagsOptionsShowButton}
              onClick={() => setShowAllTags(!showAllTags)}
              title={showAllTags ? "Show Less" : "Show More"}
              aria-label={showAllTags ? "Show Less" : "Show More"}
            >
              {showAllTags ? "Show Less" : "Show More"}
            </button>
          ) : null}
          <button
            className={entityOverlayTagsStyles.tagsOptionsShowButton}
            style={{ color: createGreenColor }}
            onClick={() => {}}
            title="Add Tag"
            aria-label="Add Tag"
          >
            Add Tag
          </button>
        </div>
      </ul>
    </div>
  );
};

export default EntityOverlayTags;
