// Types
import { EntityImagePayloadType } from "@/core/types";

export interface EntityImagesOverlayProps {
  entityImages?: EntityImagePayloadType[];
  entityName?: string;
  showOverlay?: boolean;
  closeOverlayFunction?: () => void;
  specialEntityType?: "researchActivity" | "researchPhase";
}
