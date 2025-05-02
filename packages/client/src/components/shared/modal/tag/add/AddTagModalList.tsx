// React
import { FC } from "react";
// Components
import TagComponent from "@/components/shared/entity/tag/TagComponent";
// Styles
import addTagModalListStyles from "@/scss/components/shared/modal/tag/add/AddTagModalList.module.scss";
// Interface
import { AddTagModalListProps } from "@/core/interfaces";
// Helpers
import { onTagComponentClick } from "@/helpers";
// Redux
import { useAppDispatch } from "@/hooks";
import { setSelectedTagsIds } from "@/redux/slices/tag";

const AddTagModalList: FC<AddTagModalListProps> = ({
  tagsToBeSelected,
  selectedTagsIds,
}) => {
  const dispatch = useAppDispatch();

  const onTagComponentClickFunction = (...args: any) => {
    dispatch(setSelectedTagsIds(...args));
  };

  return (
    <ul className={addTagModalListStyles.modalTagsList}>
      {tagsToBeSelected?.length > 0 ? (
        tagsToBeSelected.map((tagId) => {
          return (
            <li key={tagId}>
              <TagComponent
                tagId={tagId}
                key={tagId}
                containerType="entity"
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
        <p>No Tags found. You should create some.</p>
      )}
    </ul>
  );
};

export default AddTagModalList;
