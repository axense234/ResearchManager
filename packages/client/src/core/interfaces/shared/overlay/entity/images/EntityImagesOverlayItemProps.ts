export interface EntityImagesOverlayItemProps {
  itemTitle: string;
  parentId: string;
  specialImages: { src: string; logId: string }[];
  itemEntityType: "researchPhase" | "researchLog";

  onItemClickFunction?: (entityName: string) => void;
  onImageClickFunction: (
    logId: string,
    parentId: string,
    index: number,
  ) => void;
}
