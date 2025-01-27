// Types
import { ResearchActivityOrderByObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogOrderByObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseOrderByObject } from 'src/modules/entity/research/phase/types';

export type OrderByObjectBuilderOrderByObject =
  | ResearchActivityOrderByObject
  | ResearchLogOrderByObject
  | ResearchPhaseOrderByObject;
