// Types
import { EntityViewEntityType, EntityViewType } from "@/core/types";
export interface EntityViewProps {
  viewType: EntityViewType;
  entityType: EntityViewEntityType;
  isLoading: boolean;
  darkMode: boolean;
  entitiesIds: string[];
  setShowEntityExamples?: (value: boolean) => void;
  pageType: "profile" | "dashboard";
}
