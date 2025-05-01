export const onTagComponentClick = (
  tagId: string,
  currentTagId: string,
  setCurrentTagId: (tagId: string) => void,
) => {
  if (tagId === currentTagId) {
    setCurrentTagId(undefined);
  } else {
    setCurrentTagId(tagId);
  }
};
