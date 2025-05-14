// Types
import {
  CreateActivityLogDto,
  EntityType,
} from "@researchmanager/shared/types";

export type ActivityLogsDataType = {
  [key in EntityType]?: {
    create: CreateActivityLogDto;
    update: CreateActivityLogDto;
    delete: CreateActivityLogDto;
  };
};
