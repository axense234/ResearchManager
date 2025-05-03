// Types
import { EntityImagePayloadType } from "@/core/types/general";
import { SpecialEntityType } from "@researchmanager/shared/types";

export type EntityImagesOverlayType = {
  showOverlay: boolean;
  entityType: SpecialEntityType;
  entityName: string;
  entityImages: EntityImagePayloadType[];
};
