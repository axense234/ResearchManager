export interface EntityOverlayOptionProps {
  type: "view" | "edit" | "delete" | "pause" | "resume" | "finish";
  onClickFunction: () => void;
}
