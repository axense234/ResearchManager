// Types
import { EntityType } from "@researchmanager/shared/types";

export interface DeleteEntityOverlayOptionsProps {
  showOverlay: boolean;
  entityType: EntityType;

  onCancelFunction: () => void;
  onArchiveFunction: () => void;
  onPurgeFunction: () => void;
}
