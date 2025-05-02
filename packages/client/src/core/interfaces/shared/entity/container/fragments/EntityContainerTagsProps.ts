// Types
import { EntityContainerType } from "@/core/types";

export type EntityContainerTagsProps = {
  sourceTagsIds: string[];
  containerType: EntityContainerType;

  onRemoveTagFunction: () => void;
  onAddTagFunction: () => void;
};
