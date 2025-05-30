// Types
import { EntityType } from "@researchmanager/shared/types";

export type AddTagModalType = {
  isClosed: boolean;
  entityType: EntityType;
  location: "overlay" | "container";
  method: "create" | "update";
};
