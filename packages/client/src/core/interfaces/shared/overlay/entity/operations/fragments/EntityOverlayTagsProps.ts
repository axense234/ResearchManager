export interface EntityOverlayTagsProps {
  sourceTagsIds: string[];

  type: "view" | "upsert";

  onRemoveTagFunction?: () => void;
  onAddTagFunction?: () => void;
}
