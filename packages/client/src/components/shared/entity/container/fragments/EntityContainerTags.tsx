// Interfaces
import { FC, useState } from "react";
import { EntityContainerTagsProps } from "@/core/interfaces";
// SCSS
import entityContainerTagsStyles from "@/scss/components/shared/entity/container/fragments/EntityContainerTags.module.scss";
// Components
import TagComponent from "../../tag/TagComponent";
// Data
import {
  DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN,
  MAX_ENTITY_CONTAINER_TAGS_SHOWN,
} from "@/data/static";

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
        {tagsIds?.slice(0, tagsShownCount).map((id) => {
          return (
            <TagComponent tagId={id} key={id} containerType={containerType} />
          );
        })}
        <button
          className={entityContainerTagsStyles.entityContainerTagsShowButton}
          onClick={() => setShowAllTags(!showAllTags)}
        >
          {showAllTags ? "Show Less" : "Show More"}
        </button>
      </ul>
    </div>
  );
};

export default EntityContainerTags;
