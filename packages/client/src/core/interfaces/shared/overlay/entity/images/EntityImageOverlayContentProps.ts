// Types
import { SpecialEntityImagesPayloadType } from "@/core/types";

export interface EntityImageOverlayContentProps {
  imagesPayload: SpecialEntityImagesPayloadType;
  optionsType: "archived" | "entity" | "view" | "example" | "upsert";
  onRemoveImageFunction?: (imageSrc: string) => void;
}
