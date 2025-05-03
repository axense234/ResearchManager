// Types
import { EntityType } from "@researchmanager/shared/types";

export interface EntityViewNoEntitiesProps {
  entityType: EntityType;
  setShowEntityExamples: (value: boolean) => void;
}
