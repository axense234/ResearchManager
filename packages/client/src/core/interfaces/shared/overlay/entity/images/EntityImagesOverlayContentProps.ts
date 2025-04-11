// Types
import { EntityImagePayloadType } from "@/core/types";

export interface EntityImagesOverlayContentProps {
  specialEntityType: "researchActivity" | "researchPhase";
  entityImages: EntityImagePayloadType[];
}
