// Types
import type { EntityTypePlural } from "@researchmanager/shared/types";
import { UploadImageToCloudinaryType } from "./UploadImageToCloudinaryType";

export type UploadImageToCloudinaryDto = {
  imageFile: File;
  entityPlural: EntityTypePlural;
  type?: UploadImageToCloudinaryType;
};
