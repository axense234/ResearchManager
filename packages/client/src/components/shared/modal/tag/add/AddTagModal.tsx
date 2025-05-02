// React
import { FC, useRef } from "react";
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
  selectSelectedTagsIds,
  selectTagsIds,
  setAddTagModal,
  setSelectedTagsIds,
} from "@/redux/slices/tag";
// Interface
import { AddTagModalProps } from "@/core/interfaces";

const AddTagModal: FC<AddTagModalProps> = ({
  location,
  onAddTagFunction,
  sourceTagsIds,
}) => {
  const dispatch = useAppDispatch();

  const modalRef = useRef<HTMLDivElement>(null);

  const addTagModal = useAppSelector(selectAddTagModal);

  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);
  const totalTagsIds = useAppSelector(selectTagsIds);

  const tagsToBeSelected = totalTagsIds?.filter(
    (entityTag) => !sourceTagsIds?.includes(entityTag),
  );

  const onCloseInterfaceFunction = () => {
    dispatch(setAddTagModal({ ...addTagModal, location, isClosed: true }));
    dispatch(setSelectedTagsIds([]));
  };

  useModalTransition(
    !addTagModal.isClosed && addTagModal.location === location,
    modalRef,
  );

  return (
    <div className={addTagModalStyles.modalContainer} ref={modalRef}>
      <CloseInterfaceButton
        closeInterfaceFunction={onCloseInterfaceFunction}
        color="mainBlack"
        title="Close Modal"
        size="medium"
      />
      <AddTagModalList
        tagsToBeSelected={tagsToBeSelected}
        selectedTagsIds={selectedTagsIds}
      />
      <AddTagModalOptions
        selectedTagsIds={selectedTagsIds}
        sourceTagsIds={sourceTagsIds}
        totalTagsIds={totalTagsIds}
        onAddTagButtonClickFunction={onAddTagFunction}
      />
    </div>
  );
};

export default AddTagModal;
