// Types
import { CreateResearchActivityDto } from "@researchmanager/shared/types";

export type CreateResearchActivityDtoRedux = {
  dto: CreateResearchActivityDto;
  createDefaultResearchPhase: boolean;
};
