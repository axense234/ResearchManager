// Types
import { SpecialEntityImagesPayloadType } from "@/core/types";

export interface EntityImageOverlayProps {
  showOverlay: boolean;
  closeOverlayFunction: (imageSrc?: string) => void;
  imagesPayload: SpecialEntityImagesPayloadType;
  optionsType: "archived" | "entity" | "view" | "example" | "upsert";
  onRemoveImageFunction?: (imageSrc: string) => void;
}
