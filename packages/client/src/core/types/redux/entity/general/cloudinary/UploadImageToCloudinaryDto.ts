export type UploadImageToCloudinaryDto = {
  images: FileList | File;
  entityType: "users" | "logs";
  uploadType: "single" | "multiple";
};
