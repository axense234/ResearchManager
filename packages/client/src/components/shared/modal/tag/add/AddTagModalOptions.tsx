// React
import { FC } from "react";
// Components
import FunctionalButton from "@/components/shared/general/FunctionalButton";
// Styles
import addTagModalOptionsStyles from "@/scss/components/shared/modal/tag/add/AddTagModalOptions.module.scss";
// Interfaces
import { AddTagModalOptionsProps } from "@/core/interfaces";

const AddTagModalOptions: FC<AddTagModalOptionsProps> = ({
  currentDtoUpdateFunction,
  currentTagId,
  selectedTags,
  totalTags,
}) => {
  const isAddTagButtonDisabled =
    currentTagId === undefined ||
    selectedTags.includes(currentTagId) ||
    selectedTags.length === totalTags.length;

  let addTagButtonDisabledMessage = "Please select a Tag!";
  if (selectedTags.includes(currentTagId)) {
    addTagButtonDisabledMessage = "Please select another Tag!";
  } else if (selectedTags.length === totalTags.length) {
    addTagButtonDisabledMessage = "No Tags to select from!";
  }

  return (
    <div className={addTagModalOptionsStyles.modalOptions}>
      <FunctionalButton
        content="Add Tag"
        disabled={isAddTagButtonDisabled}
        onHoverContent="Add Selected Tag"
        onHoverContentDisabled={addTagButtonDisabledMessage}
        onClickFunction={currentDtoUpdateFunction}
        size="small"
        colorScheme="yellow"
      />
      <FunctionalButton
        content="Create Tag"
        disabled={false}
        onHoverContent="Create Tag"
        onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
        onClickFunction={() => {}}
        size="small"
      />
    </div>
  );
};

export default AddTagModalOptions;
