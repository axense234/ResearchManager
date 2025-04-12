// Types
import { EntityImagePayloadType } from "@/core/types";

export interface EntityImageOverlayProps {
  showOverlay: boolean;
  closeOverlayFunction: (imageSrc?: string) => void;
  imagePayload: EntityImagePayloadType;
}
