// Types
import { EntityViewEntityType, EntityViewType } from "@/core/types";

export interface EntityViewProps {
  viewType: EntityViewType;
  entityType: EntityViewEntityType;
  entityId: string;
  isLoading: boolean;
}
