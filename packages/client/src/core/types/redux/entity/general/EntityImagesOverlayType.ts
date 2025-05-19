// Types
import {
  EntityContainerType,
  EntityImagePayloadType,
} from "@/core/types/general";

export type EntityImagesOverlayType = {
  showOverlay: boolean;
  viewType: EntityContainerType;
  entityImages: EntityImagePayloadType[];
  parentLabel: string;
};
