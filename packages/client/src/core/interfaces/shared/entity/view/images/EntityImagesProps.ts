// Types
import { EntityViewType, SpecialEntityRedux } from "@/core/types";
import { SpecialEntityType } from "@researchmanager/shared/types";

export interface EntityImagesProps {
  specialEntity: SpecialEntityRedux;
  specialEntityType: SpecialEntityType;
  viewType: EntityViewType;
}
