// Types
import { ResearchActivityQueryObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogQueryObject } from 'src/modules/entity/research/log/types';

export type QueryObjectBuilderQueryObject = ResearchActivityQueryObject &
  ResearchLogQueryObject;
