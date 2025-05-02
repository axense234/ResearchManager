// Redux
import { closeAddTagModal, setSelectedTagsIds } from "@/redux/slices/tag";

export const onEditTagFunction = (
  type: "remove" | "add",
  sourceTagsIds: string[],
  selectedTagsIds: string[],
  onEditTagConsequence: (editedTags: string[]) => void,
  dispatch: (...args: any) => void,
) => {
  let editedTags: string[] = [];

  if (type === "remove") {
    editedTags = sourceTagsIds.filter(
      (tagId) => !selectedTagsIds.includes(tagId),
    );
  } else if (type === "add") {
    editedTags = [...sourceTagsIds, ...selectedTagsIds];
  }

  dispatch(onEditTagConsequence(editedTags));

  dispatch(setSelectedTagsIds([]));
  dispatch(closeAddTagModal());
};
