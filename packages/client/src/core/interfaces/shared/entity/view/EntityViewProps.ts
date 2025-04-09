// Types
import { EntityContainerEntityType, EntityContainerType } from "@/core/types";

export interface EntityViewProps {
  viewType: EntityContainerType;
  entityType: EntityContainerEntityType;
  entityId: string;
}
