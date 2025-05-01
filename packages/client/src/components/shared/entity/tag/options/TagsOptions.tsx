// React
import { FC, useState } from "react";
// Interfaces
import { TagsOptionsProps } from "@/core/interfaces";
// SCSS
import tagsOptionsStyles from "@/scss/components/shared/entity/tag/options/TagsOptions.module.scss";
// Components
import AddTagModal from "@/components/shared/modal/tag/add/AddTagModal";
// Data
import {
  DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN,
  createGreenColor,
  deleteRedColor,
} from "@/data/general";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectAddTagModal,
  selectSelectedTagId,
  setAddTagModal,
} from "@/redux/slices/tag";

const TagsOptions: FC<TagsOptionsProps> = ({
  onRemoveTagFunction,
  tags,
  showAllTags,
  setShowAllTags,
}) => {
  const dispatch = useAppDispatch();

  const addTagModal = useAppSelector(selectAddTagModal);
  const selectedTagId = useAppSelector(selectSelectedTagId);

  return (
    <div className={tagsOptionsStyles.tagsOptionsContainer}>
      {tags?.length > DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN ? (
        <button
          className={tagsOptionsStyles.tagOptionButton}
          onClick={() => setShowAllTags(!showAllTags)}
          title={showAllTags ? "Show Less" : "Show More"}
          aria-label={showAllTags ? "Show Less" : "Show More"}
        >
          {showAllTags ? "Show Less" : "Show More"}
        </button>
      ) : null}
      <AddTagModal />
      <button
        className={tagsOptionsStyles.tagOptionButton}
        style={{ color: createGreenColor }}
        onClick={() =>
          dispatch(setAddTagModal({ ...addTagModal, isClosed: false }))
        }
        title="Add Tag"
        aria-label="Add Tag"
      >
        Add Tag
      </button>
      {selectedTagId !== undefined && addTagModal.isClosed && (
        <button
          className={tagsOptionsStyles.tagOptionButton}
          title="Remove Tag"
          aria-label="Remove Tag"
          style={{ color: deleteRedColor }}
          onClick={onRemoveTagFunction}
        >
          Remove Tag
        </button>
      )}
    </div>
  );
};
export default TagsOptions;
