// React
import { FC } from "react";
// Components
import FunctionalButton from "@/components/shared/general/FunctionalButton";
// Styles
import addTagModalOptionsStyles from "@/scss/components/shared/modal/tag/add/AddTagModalOptions.module.scss";
// Interfaces
import { AddTagModalOptionsProps } from "@/core/interfaces";

const AddTagModalOptions: FC<AddTagModalOptionsProps> = ({
  selectedTagsIds,
  sourceTagsIds,
  totalTagsIds,
  onAddTagButtonClickFunction,
  onCreateTagButtonClickFunction,
}) => {
  const isAddTagButtonDisabled =
    selectedTagsIds.length < 1 ||
    selectedTagsIds.some((selectedTagId) =>
      sourceTagsIds?.includes(selectedTagId),
    ) ||
    selectedTagsIds.length === totalTagsIds.length;

  let addTagButtonDisabledMessage = "Please select some Tag!";
  if (
    selectedTagsIds.some((selectedTagId) =>
      sourceTagsIds?.includes(selectedTagId),
    )
  ) {
    addTagButtonDisabledMessage = "Please select other Tags!";
  } else if (selectedTagsIds.length === totalTagsIds.length) {
    addTagButtonDisabledMessage = "No Tags to select from!";
  }

  return (
    <div className={addTagModalOptionsStyles.modalOptions}>
      <FunctionalButton
        content="Add Tag"
        disabled={isAddTagButtonDisabled}
        onHoverContent="Add Selected Tag"
        onHoverContentDisabled={addTagButtonDisabledMessage}
        onClickFunction={onAddTagButtonClickFunction}
        size="small"
        colorScheme="green"
      />
      <FunctionalButton
        content="Create Tag"
        disabled={false}
        onHoverContent="Create Tag"
        onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
        onClickFunction={onCreateTagButtonClickFunction}
        size="small"
        colorScheme="darkBlue"
      />
    </div>
  );
};

export default AddTagModalOptions;
