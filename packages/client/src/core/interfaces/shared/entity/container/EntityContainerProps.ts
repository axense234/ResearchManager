// Types
import { EntityContainerEntityType, EntityContainerType } from "@/core/types";

export interface EntityContainerProps {
  entityType: EntityContainerEntityType;
  containerType: EntityContainerType;
  entityId: string;
  darkMode: boolean;
}
