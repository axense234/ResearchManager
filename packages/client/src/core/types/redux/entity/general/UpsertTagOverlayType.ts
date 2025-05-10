export type UpsertTagOverlayType = {
  showOverlay: boolean;
  method: "create" | "update";
  entityId?: string;
};
