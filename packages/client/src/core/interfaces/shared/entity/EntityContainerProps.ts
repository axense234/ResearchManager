// Types
import { EntityContainerType } from "@/core/types";

export interface EntityContainerProps {
  entityType: EntityContainerType;
  containerType: "example" | "entity" | "archived";
}
