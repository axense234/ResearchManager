// Interfaces
import { FC } from "react";
import { EntityContainerFragmentInterfaceProps } from "@/core/interfaces";
// SCSS
import entityContainerTagsStyles from "@/scss/components/shared/entity/container/fragments/EntityContainerTags.module.scss";
// Redux
import { useAppSelector } from "@/hooks";
import { selectTagsExamples } from "@/redux/slices/tag";
// Components
import TagComponent from "../../tag/TagComponent";

const EntityContainerTags: FC<EntityContainerFragmentInterfaceProps> = ({
  containerType,
}) => {
  const tagsExamples = useAppSelector(selectTagsExamples);

  if (containerType === "example") {
    return (
      <div className={entityContainerTagsStyles.entityContainerTagsContainer}>
        <ul className={entityContainerTagsStyles.entityContainerTagsList}>
          {tagsExamples.slice(0, 6).map((tag) => {
            return (
              <TagComponent
                tagId={tag.id}
                containerType={containerType}
                key={tag.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className={entityContainerTagsStyles.entityContainerTagsContainer}>
      tags
    </div>
  );
};

export default EntityContainerTags;
