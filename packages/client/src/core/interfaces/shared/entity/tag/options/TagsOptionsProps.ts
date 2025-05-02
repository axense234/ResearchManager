// Types
import { EntityContainerType } from "@/core/types";

export interface TagsOptionsProps {
  sourceTagsIds: string[];
  showAllTags: boolean;
  setShowAllTags: (show: boolean) => void;
  containerType: EntityContainerType;
  location: "overlay" | "container";

  onRemoveTagFunction: () => void;
  onAddTagFunction: () => void;
}
