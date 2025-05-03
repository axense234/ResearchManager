// Types
import {
  EntityViewType,
  EntityViewEntityType,
  EntityPositionType,
} from "@/core/types";

export interface EntityViewContentProps {
  viewType: EntityViewType;
  entityType: EntityViewEntityType;
  entityId: string;
  entityIndex: number;
  darkMode: boolean;
  position: EntityPositionType;
}
