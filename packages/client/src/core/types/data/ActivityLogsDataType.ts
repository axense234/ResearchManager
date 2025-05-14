// Types
import {
  CreateActivityLogDto,
  EntityType,
} from "@researchmanager/shared/types";

export type ActivityLogsDataType = {
  [key in EntityType]?: {
    CREATE: CreateActivityLogDto;
    UPDATE: CreateActivityLogDto;
    PURGE: CreateActivityLogDto;
    ARCHIVE: CreateActivityLogDto;
  };
};
