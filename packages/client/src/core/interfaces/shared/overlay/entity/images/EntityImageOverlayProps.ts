// Types
import { SpecialEntityImagesPayloadType } from "@/core/types";

export interface EntityImageOverlayProps {
  showOverlay: boolean;
  closeOverlayFunction: (imageSrc?: string) => void;
  imagesPayload: SpecialEntityImagesPayloadType;
}
