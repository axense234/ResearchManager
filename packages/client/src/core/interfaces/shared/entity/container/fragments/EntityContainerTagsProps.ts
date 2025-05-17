// Types
import { EntityContainerType } from "@/core/types";

export type EntityContainerTagsProps = {
  sourceTagsIds: string[];
  containerType: EntityContainerType;

  tagSize?: "normal" | "small";

  onRemoveTagFunction?: () => void;
  onAddTagFunction?: () => void;
};
