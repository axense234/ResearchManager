export interface AddTagModalOptionsProps {
  selectedTagsIds: string[];
  sourceTagsIds: string[];
  totalTagsIds: string[];

  onAddTagButtonClickFunction: () => void;
  onCreateTagButtonClickFunction?: () => void;
}
