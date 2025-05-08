// Types
import { EntityContainerType } from "@/core/types";
import { CreateTagDto, UpdateTagDto } from "@researchmanager/shared/types";

export interface TagComponentProps {
  containerType: EntityContainerType | "preview";
  tagId?: string;
  isTagSelected?: boolean;
  onClickFunction?: () => void;
  tagShowcase?: CreateTagDto | UpdateTagDto;
}
