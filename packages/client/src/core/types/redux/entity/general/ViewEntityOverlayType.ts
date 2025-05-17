// Types
import { EntityType } from "@researchmanager/shared/types";

export type ViewEntityOverlayType = {
  showOverlay: boolean;
  entityType: EntityType;
  entityId?: string;
};
