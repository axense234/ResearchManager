export const useDetermineAddTagButtonDisabledInfo = (
  selectedTagsIds: string[],
  totalTagsIds: string[],
  sourceTagsIds: string[],
) => {
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

  return { isAddTagButtonDisabled, addTagButtonDisabledMessage };
};
