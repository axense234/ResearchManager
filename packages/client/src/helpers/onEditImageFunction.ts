export const onEditImageFunction = (
  type: "remove" | "add",
  sourceImagesSrcIds: string[],
  selectedImagesSrcIds: string[],
  onEditImageConsequence: (editedTags: string[]) => void,
  dispatch: (...args: any) => void,
) => {
  let editedImages: string[] = [];

  if (type === "remove") {
    editedImages = sourceImagesSrcIds.filter(
      (imageSrc) => !selectedImagesSrcIds.includes(imageSrc),
    );
  } else if (type === "add") {
    editedImages = [...sourceImagesSrcIds, ...selectedImagesSrcIds];
  }

  dispatch(onEditImageConsequence(editedImages));
};
