// React
import { FC, useRef } from "react";
// Interfaces
import { TagsOptionsProps } from "@/core/interfaces";
// SCSS
import tagsOptionsStyles from "@/scss/components/shared/entity/tag/options/TagsOptions.module.scss";
// Components
import AddTagModal from "@/components/shared/modal/tag/add/AddTagModal";
import TagsOptionsButton from "./TagsOptionsButton";
// Data
import {
  DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN,
  DEFAULT_ENTITY_OVERLAY_TAGS_SHOWN,
  createGreenColor,
  deleteRedColor,
  mainPastelRedColor,
} from "@/data/general";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectAddTagModal,
  selectSelectedTagsIds,
  setAddTagModal,
} from "@/redux/slices/tag";

const TagsOptions: FC<TagsOptionsProps> = ({
  sourceTagsIds,
  showAllTags,
  setShowAllTags,
  containerType,
  location,
  onRemoveTagFunction,
  onAddTagFunction,
}) => {
  const dispatch = useAppDispatch();

  const optionsRef = useRef<HTMLDivElement>(null);

  const addTagModal = useAppSelector(selectAddTagModal);
  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const DEFAULT_ENTITY_TAGS_SHOWN =
    location === "overlay"
      ? DEFAULT_ENTITY_OVERLAY_TAGS_SHOWN
      : DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN;

  return (
    <div
      className={tagsOptionsStyles.tagsOptionsContainer}
      ref={optionsRef}
      style={{ alignSelf: location === "overlay" ? "flex-start" : "center" }}
    >
      <AddTagModal
        location={location}
        sourceTagsIds={sourceTagsIds}
        onAddTagFunction={onAddTagFunction}
      />
      <TagsOptionsButton
        showButton={sourceTagsIds?.length > DEFAULT_ENTITY_TAGS_SHOWN}
        onButtonClickFunction={() => setShowAllTags(!showAllTags)}
        buttonColor={mainPastelRedColor}
        buttonLabel={showAllTags ? "Show Less" : "Show More"}
      />
      <TagsOptionsButton
        showButton={containerType !== "example"}
        onButtonClickFunction={() =>
          dispatch(
            setAddTagModal({ ...addTagModal, location, isClosed: false }),
          )
        }
        buttonColor={createGreenColor}
        buttonLabel="Add Tag"
      />
      <TagsOptionsButton
        showButton={selectedTagsIds.length > 0 && addTagModal.isClosed}
        onButtonClickFunction={onRemoveTagFunction}
        buttonColor={deleteRedColor}
        buttonLabel="Remove Tag"
      />
    </div>
  );
};
export default TagsOptions;
