// Types
import { EntityContainerType, EntityPositionType } from "@/core/types";

export interface EntityContainerInterfaceProps {
  containerType: EntityContainerType;
  entityId: string;
  darkMode: boolean;
  entityIndex: number;
  position: EntityPositionType;
}
