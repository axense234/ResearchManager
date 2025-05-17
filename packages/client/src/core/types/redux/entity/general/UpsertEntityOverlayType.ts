// Types
import { EntityType } from "@researchmanager/shared/types";

export type UpsertEntityOverlayType = {
  showOverlay: boolean;
  entityType: EntityType;
  method: "create" | "update";
  entityId?: string;
};
