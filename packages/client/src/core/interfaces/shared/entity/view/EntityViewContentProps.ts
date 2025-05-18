// Types
import {
  EntityViewType,
  EntityViewEntityType,
  EntityPositionType,
} from "@/core/types";

export interface EntityViewContentProps {
  viewType: EntityViewType;

  entityType: EntityViewEntityType;
  entityId: string;

  darkMode: boolean;
  position: EntityPositionType;

  isCurrentView: boolean;

  showSessions: boolean;
  showImages: boolean;
  showGraph: boolean;

  setShowSessions: (show: boolean) => void;
  setShowImages: (show: boolean) => void;
  setShowGraph: (show: boolean) => void;
}
