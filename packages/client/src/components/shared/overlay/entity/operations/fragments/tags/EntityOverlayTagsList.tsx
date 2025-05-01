// React
import { FC } from "react";
// Interfaces
import { EntityOverlayTagsListProps } from "@/core/interfaces";
// SCSS
import entityOverlayTagsListStyles from "@/scss/components/shared/overlay/entity/operations/fragments/tags/EntityOverlayTagsList.module.scss";
// Components
import TagComponent from "@/components/shared/entity/tag/TagComponent";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectSelectedTagId, setSelectedTagId } from "@/redux/slices/tag";
import { onTagComponentClick } from "@/helpers";

const EntityOverlayTagsList: FC<EntityOverlayTagsListProps> = ({
  shownTags,
  shownTagsCount,
}) => {
  const dispatch = useAppDispatch();
  const selectedTagId = useAppSelector(selectSelectedTagId);

  return (
    <ul className={entityOverlayTagsListStyles.tagsList}>
      {shownTags?.length > 0 ? (
        shownTags.slice(0, shownTagsCount).map((tagId) => {
          return (
            <li key={tagId}>
              <TagComponent
                tagId={tagId}
                key={tagId}
                containerType="entity"
                onClickFunction={() =>
                  onTagComponentClick(tagId, selectedTagId, (tagId) =>
                    dispatch(setSelectedTagId(tagId)),
                  )
                }
                selectedTagToAdd={tagId === selectedTagId}
              />
            </li>
          );
        })
      ) : (
        <p>No Tags selected. You should add some.</p>
      )}
    </ul>
  );
};

export default EntityOverlayTagsList;
