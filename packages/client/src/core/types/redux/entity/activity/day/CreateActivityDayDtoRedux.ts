// Types
import {
  CreateActivityDayDto,
  CreateActivityLogDto,
} from "@researchmanager/shared/types";

export type CreateActivityDayDtoRedux = {
  dto: CreateActivityDayDto;
  createActivityLogDto: CreateActivityLogDto;
};
