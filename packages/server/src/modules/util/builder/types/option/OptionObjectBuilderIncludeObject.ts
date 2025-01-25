// Types
import { ResearchActivityIncludeObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogIncludeObject } from 'src/modules/entity/research/log/types';

export type OptionObjectBuilderIncludeObject =
  | ResearchActivityIncludeObject
  | ResearchLogIncludeObject;
