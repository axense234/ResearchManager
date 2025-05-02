export const onTagComponentClick = (
  tagId: string,
  selectedTagsIds: string[],
  setSelectedTagsIds: (tagsIds: string[]) => void,
) => {
  if (selectedTagsIds.includes(tagId)) {
    setSelectedTagsIds(
      selectedTagsIds.filter((selectedTagId) => selectedTagId !== tagId),
    );
  } else {
    setSelectedTagsIds([...selectedTagsIds, tagId]);
  }
};
