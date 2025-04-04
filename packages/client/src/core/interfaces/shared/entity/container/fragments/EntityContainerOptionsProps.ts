// Types
import { EntityContainerType } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";

export interface EntityContainerOptionsProps {
  entityId: string;
  entityType: EntityType;
  containerType: EntityContainerType;
}
