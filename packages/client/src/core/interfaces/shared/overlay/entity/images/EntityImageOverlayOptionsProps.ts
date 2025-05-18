import { SpecialEntityImagesPayloadType } from "@/core/types";

export interface EntityImageOverlayOptionsProps {
  optionsType: "entity" | "archived" | "example" | "view" | "upsert";
  onRemoveImageFunction?: (imageSrc: string) => void;
  imagesPayload: SpecialEntityImagesPayloadType;
}
