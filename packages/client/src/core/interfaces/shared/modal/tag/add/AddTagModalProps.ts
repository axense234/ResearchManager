export interface AddTagModalProps {
  location: "overlay" | "container";

  sourceTagsIds: string[];

  onAddTagFunction: () => void;
}
