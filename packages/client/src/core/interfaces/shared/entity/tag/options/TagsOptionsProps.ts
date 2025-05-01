export interface TagsOptionsProps {
  tags: string[];
  onRemoveTagFunction: () => void;
  showAllTags: boolean;
  setShowAllTags: (show: boolean) => void;
}
