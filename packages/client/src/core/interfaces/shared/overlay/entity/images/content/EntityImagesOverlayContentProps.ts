// Types
import { EntityContainerType, EntityImagePayloadType } from "@/core/types";

export interface EntityImagesOverlayContentProps {
  specialEntityType: "researchActivity" | "researchPhase";
  entityImages: EntityImagePayloadType[];
  onRemoveImageFunction?: (imageSrc: string) => void;
  viewType: EntityContainerType;
}
