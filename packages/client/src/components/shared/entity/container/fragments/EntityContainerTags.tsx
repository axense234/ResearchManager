// Interfaces
import { FC, useState } from "react";
import { EntityContainerTagsProps } from "@/core/interfaces";
// SCSS
import entityContainerTagsStyles from "@/scss/components/shared/entity/container/fragments/EntityContainerTags.module.scss";
// Components
import TagComponent from "../../tag/TagComponent";
// Data
import {
  createGreenColor,
  DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN,
  MAX_ENTITY_CONTAINER_TAGS_SHOWN,
} from "@/data/general";

const EntityContainerTags: FC<EntityContainerTagsProps> = ({
  tagsIds,
  containerType,
}) => {
  const [showAllTags, setShowAllTags] = useState<boolean>(false);

  const tagsShownCount = showAllTags
    ? MAX_ENTITY_CONTAINER_TAGS_SHOWN
    : DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN;

  return (
    <div className={entityContainerTagsStyles.entityContainerTagsContainer}>
      <ul className={entityContainerTagsStyles.entityContainerTagsList}>
        {tagsIds?.length > 0 ? (
          tagsIds?.slice(0, tagsShownCount).map((id) => {
            return (
              <TagComponent tagId={id} key={id} containerType={containerType} />
            );
          })
        ) : (
          <p>Untagged</p>
        )}
        <div className={entityContainerTagsStyles.entityContainerTagsOptions}>
          {tagsIds?.length > DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN ? (
            <button
              className={
                entityContainerTagsStyles.entityContainerTagsShowButton
              }
              onClick={() => setShowAllTags(!showAllTags)}
              title={showAllTags ? "Show Less" : "Show More"}
              aria-label={showAllTags ? "Show Less" : "Show More"}
            >
              {showAllTags ? "Show Less" : "Show More"}
            </button>
          ) : null}
          {containerType !== "example" ? (
            <button
              className={
                entityContainerTagsStyles.entityContainerTagsShowButton
              }
              style={{ color: createGreenColor }}
              onClick={() => {}}
              title="Add Tag"
              aria-label="Add Tag"
            >
              Add Tag
            </button>
          ) : null}
        </div>
      </ul>
    </div>
  );
};

export default EntityContainerTags;
