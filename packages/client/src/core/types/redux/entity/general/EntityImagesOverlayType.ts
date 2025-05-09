// Types
import { EntityImagePayloadType } from "@/core/types/general";

export type EntityImagesOverlayType = {
  showOverlay: boolean;
  entityName: string;
  entityImages: EntityImagePayloadType[];
};
