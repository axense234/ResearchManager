export interface EntityOverlayImagesListProps {
  imagesSrc: string[];
  onImageClickFunction: (index: number) => void;
  type: "view" | "upsert";
  isLoading: boolean;
}
