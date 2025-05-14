// Types
import { CreateActivityLogDto } from '@researchmanager/shared/types';

export class DataObjectBuilderParamsOptions {
  createSettings?: 'false' | 'true';
  createActivityFeed?: 'false' | 'true';
  createDefaultResearchPhase?: 'false' | 'true';
  createDefaultTags?: 'false' | 'true';
  createActivityLog?: 'false' | 'true';
  createActivityLogDto?: CreateActivityLogDto;
}
