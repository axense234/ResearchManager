// Types
import { EntityContainerType } from "@/core/types";

export interface TagComponentProps {
  tagId: string;
  containerType: EntityContainerType;
  selectedTagToAdd?: boolean;
  onClickFunction?: () => void;
}
