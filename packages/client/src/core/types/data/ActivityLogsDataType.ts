// Types
import { ActivitySubject } from "@prisma/client";
import { CreateActivityLogDto } from "@researchmanager/shared/types";

export type ActivityLogsDataType = {
  [key in ActivitySubject]?: CreateActivityLogDto;
};
