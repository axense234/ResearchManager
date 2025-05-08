// React
import { FC, useRef } from "react";
// Components
import FunctionalButton from "@/components/shared/general/FunctionalButton";
// Styles
import addTagModalOptionsStyles from "@/scss/components/shared/modal/tag/add/AddTagModalOptions.module.scss";
// Interfaces
import { AddTagModalOptionsProps } from "@/core/interfaces";
// Hooks
import { useAppDispatch, useDetermineAddTagButtonDisabledInfo } from "@/hooks";
import { setEntityOverlay } from "@/redux/slices/general/slice";

const AddTagModalOptions: FC<AddTagModalOptionsProps> = ({
  selectedTagsIds,
  sourceTagsIds,
  totalTagsIds,
  onAddTagButtonClickFunction,
}) => {
  const dispatch = useAppDispatch();
  const optionsRef = useRef<HTMLDivElement>(null);

  const { addTagButtonDisabledMessage, isAddTagButtonDisabled } =
    useDetermineAddTagButtonDisabledInfo(
      selectedTagsIds,
      totalTagsIds,
      sourceTagsIds,
    );

  return (
    <div className={addTagModalOptionsStyles.modalOptions} ref={optionsRef}>
      <FunctionalButton
        content={selectedTagsIds.length > 1 ? "Add Tags" : "Add Tag"}
        disabled={isAddTagButtonDisabled}
        onHoverContent={
          selectedTagsIds.length > 1 ? "Add Selected Tags" : "Add Selected Tag"
        }
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
        onClickFunction={() =>
          dispatch(
            setEntityOverlay({
              entityType: "tag",
              method: "create",
              showOverlay: true,
            }),
          )
        }
        size="small"
        colorScheme="green"
      />
    </div>
  );
};

export default AddTagModalOptions;
