// Types
import { ResearchActivityIncludeObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogIncludeObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseIncludeObject } from 'src/modules/entity/research/phase/types';

export type OptionObjectBuilderIncludeObject =
  | ResearchActivityIncludeObject
  | ResearchLogIncludeObject
  | ResearchPhaseIncludeObject;
