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

const AddTagModalList: FC<AddTagModalListProps> = ({
  shownTags,
  currentTagId,
  setCurrentTagId,
}) => {
  return (
    <ul className={addTagModalListStyles.modalTagsList}>
      {shownTags?.length > 0 ? (
        shownTags.map((tagId) => {
          return (
            <li
              key={tagId}
              onClick={() =>
                onTagComponentClick(tagId, currentTagId, setCurrentTagId)
              }
            >
              <TagComponent
                tagId={tagId}
                key={tagId}
                containerType="entity"
                onClickFunction={() =>
                  onTagComponentClick(tagId, currentTagId, setCurrentTagId)
                }
                selectedTagToAdd={tagId === currentTagId}
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
