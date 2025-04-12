// Types
import { MouseEventHandler } from "react";

export interface EntityImagesOverlayItemProps {
  itemName: string;
  itemId: string;
  itemImages: string[];
  itemEntityType: "researchPhase" | "researchLog";
  onItemClickFunction?: MouseEventHandler<HTMLHeadingElement> | undefined;
  onImageClickFunction?: (imageSrc?: string) => void;
}
