// Types
import {
  EntityContainerEntityType,
  EntityContainerType,
  EntityPositionType,
} from "@/core/types";

export interface EntityContainerProps {
  entityType: EntityContainerEntityType;
  containerType: EntityContainerType;
  entityId: string;
  darkMode: boolean;
  position: EntityPositionType;
  isCurrentView: boolean;
}
