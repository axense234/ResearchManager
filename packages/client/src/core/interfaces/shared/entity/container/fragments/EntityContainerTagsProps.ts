// Types
import { EntityContainerType } from "@/core/types";

export type EntityContainerTagsProps = {
  tagsIds: string[];
  containerType: EntityContainerType;
  dtoUpdateFunction: () => void;
};
