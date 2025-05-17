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
  tagSize = "normal",
}) => {
  const dispatch = useAppDispatch();
  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const onTagComponentClickFunction = (...args: any) => {
    dispatch(setSelectedTagsIds(...args));
  };

  return (
    <ul
      className={tagsListStyles.tagsListContainer}
      style={{ gap: tagSize === "small" ? "1rem" : "2rem" }}
    >
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
                componentSize={tagSize}
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
