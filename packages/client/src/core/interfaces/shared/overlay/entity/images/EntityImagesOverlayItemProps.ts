export interface EntityImagesOverlayItemProps {
  itemName: string;
  itemId: string;
  itemImages: string[];
  itemEntityType: "researchPhase" | "researchLog";
  onItemClickFunction?: (entityName: string) => void;
  onImageClickFunction: (parentName: string, index: number) => void;
}
