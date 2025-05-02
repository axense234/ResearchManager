// React
import { FC } from "react";
// SCSS
import tagsListStyles from "@/scss/components/shared/entity/tag/TagsList.module.scss";
// Interfaces
import { TagsListProps } from "@/core/interfaces";
// Components
import TagComponent from "./TagComponent";
// Helpers
import { onTagComponentClick } from "@/helpers";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectSelectedTagsIds, setSelectedTagsIds } from "@/redux/slices/tag";

const TagsList: FC<TagsListProps> = ({
  sourceTagsIds,
  numberOfTagsShown,
  noTagsAvailableMessage,
  containerType,
}) => {
  const dispatch = useAppDispatch();
  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const onTagComponentClickFunction = (...args: any) => {
    dispatch(setSelectedTagsIds(...args));
  };

  return (
    <ul className={tagsListStyles.tagsListContainer}>
      {sourceTagsIds?.length > 0 ? (
        sourceTagsIds.slice(0, numberOfTagsShown).map((tagId) => {
          return (
            <li key={tagId}>
              <TagComponent
                tagId={tagId}
                key={tagId}
                containerType={containerType}
                onClickFunction={() =>
                  onTagComponentClick(
                    tagId,
                    selectedTagsIds,
                    onTagComponentClickFunction,
                  )
                }
                isTagSelected={selectedTagsIds.includes(tagId)}
              />
            </li>
          );
        })
      ) : (
        <p>{noTagsAvailableMessage}</p>
      )}
    </ul>
  );
};

export default TagsList;
