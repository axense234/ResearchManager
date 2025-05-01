// React
import { FC, useRef, useState } from "react";
// Components
import AddTagModalOptions from "./AddTagModalOptions";
import CloseInterfaceButton from "../../../general/CloseInterfaceButton";
import AddTagModalList from "./AddTagModalList";
// SCSS
import addTagModalStyles from "@/scss/components/shared/modal/tag/add/AddTagModal.module.scss";
// Hooks
import { useAppDispatch, useAppSelector, useModalTransition } from "@/hooks";
// Redux
import {
  selectAddTagModal,
  selectSelectedTagId,
  selectTagsIds,
  setAddTagModal,
  setSelectedTagId,
} from "@/redux/slices/tag";
import {
  selectCreateResearchActivityDto,
  updateCreateResearchActivityDto,
} from "@/redux/slices/research/activity";

const AddTagModal: FC = () => {
  const dispatch = useAppDispatch();

  const modalRef = useRef<HTMLDivElement>(null);

  const addTagModal = useAppSelector(selectAddTagModal);
  const selectedTagId = useAppSelector(selectSelectedTagId);

  const tagsIds = useAppSelector(selectTagsIds);

  const createResearchActivityDto = useAppSelector(
    selectCreateResearchActivityDto,
  );
  let currentDto = createResearchActivityDto;
  let currentDtoUpdateFunction = updateCreateResearchActivityDto;

  switch (addTagModal.entityType) {
    case "researchActivity":
      currentDto = createResearchActivityDto;
      currentDtoUpdateFunction = updateCreateResearchActivityDto;
      break;
    default:
      throw new Error("Invalid addTagModal entityType.");
  }

  const shownTags = tagsIds.filter((tag) => !currentDto.tags.includes(tag));

  useModalTransition(!addTagModal.isClosed, modalRef);

  return (
    <div className={addTagModalStyles.modalContainer} ref={modalRef}>
      <CloseInterfaceButton
        closeInterfaceFunction={() => {
          dispatch(setAddTagModal({ ...addTagModal, isClosed: true }));
          dispatch(setSelectedTagId(undefined));
        }}
        color="mainBlack"
        title="Close Modal"
        size="medium"
      />
      <AddTagModalList
        shownTags={shownTags}
        currentTagId={selectedTagId}
        setCurrentTagId={(tagId) => dispatch(setSelectedTagId(tagId))}
      />
      <AddTagModalOptions
        currentTagId={selectedTagId}
        selectedTags={currentDto.tags}
        totalTags={tagsIds}
        currentDtoUpdateFunction={() => {
          dispatch(
            currentDtoUpdateFunction({
              key: "tags",
              value: [...currentDto.tags, selectedTagId],
            }),
          );
          dispatch(setSelectedTagId(undefined));
        }}
      />
    </div>
  );
};

export default AddTagModal;
