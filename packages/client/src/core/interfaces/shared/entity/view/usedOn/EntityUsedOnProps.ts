// Types
import { EntityPositionType, EntityViewType, TagRedux } from "@/core/types";

export interface EntityUsedOnProps {
  tag: TagRedux;

  darkMode: boolean;
  position: EntityPositionType;

  isCurrentView: boolean;

  showEntities: boolean;
  setShowEntities: (show: boolean) => void;
}
