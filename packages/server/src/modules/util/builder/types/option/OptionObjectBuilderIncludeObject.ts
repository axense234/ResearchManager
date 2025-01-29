// Types
import { ResearchActivityIncludeObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogIncludeObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseIncludeObject } from 'src/modules/entity/research/phase/types';
import { ResearchSessionIncludeObject } from 'src/modules/entity/research/session/types';

export type OptionObjectBuilderIncludeObject =
  | ResearchActivityIncludeObject
  | ResearchLogIncludeObject
  | ResearchPhaseIncludeObject
  | ResearchSessionIncludeObject;
