// Types
import { EntityContainerType } from "@/core/types";

export interface TagsListProps {
  sourceTagsIds: string[];
  numberOfTagsShown: number;
  noTagsAvailableMessage: string;
  containerType: EntityContainerType | "view";
  tagSize?: "normal" | "small";
}
