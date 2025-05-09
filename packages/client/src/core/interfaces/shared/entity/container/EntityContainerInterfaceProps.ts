// Types
import { EntityContainerType, EntityPositionType } from "@/core/types";

export interface EntityContainerInterfaceProps {
  containerType: EntityContainerType;
  entityId: string;
  darkMode: boolean;
  position: EntityPositionType;
  isCurrentView: boolean;
}
