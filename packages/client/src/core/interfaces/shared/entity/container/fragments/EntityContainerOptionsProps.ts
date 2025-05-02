// Types
import { EntityContainerType } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";

export interface EntityContainerOptionsProps {
  entityType: EntityType;
  containerType: EntityContainerType;

  onEntityUpdateFunction: () => void;
  onEntityDeleteFunction: () => void;
}
