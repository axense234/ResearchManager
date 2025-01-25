// NestJS
import { ResearchActivitySelectObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogSelectObject } from 'src/modules/entity/research/log/types';

export type OptionObjectBuilderSelectObject =
  | ResearchActivitySelectObject
  | ResearchLogSelectObject;
