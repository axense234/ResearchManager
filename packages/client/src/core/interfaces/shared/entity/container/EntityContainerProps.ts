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
  entityIndex: number;
  position: EntityPositionType;
}
