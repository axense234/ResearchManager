// Types
import { Settings } from "@prisma/client";
import { UserPayload } from "./UserPayload";

export type SettingsPayload = Settings & {
  user?: UserPayload;
};
