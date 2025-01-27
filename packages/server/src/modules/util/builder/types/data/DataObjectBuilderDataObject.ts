// Types
import {
  ResearchActivityCreateDataObject,
  ResearchActivityUpdateDataObject,
} from 'src/modules/entity/research/activity/types';
import {
  ResearchLogCreateDataObject,
  ResearchLogUpdateDataObject,
} from 'src/modules/entity/research/log/types';
import {
  ResearchPhaseCreateDataObject,
  ResearchPhaseUpdateDataObject,
} from 'src/modules/entity/research/phase/types';

export type DataObjectBuilderDataObject =
  | ResearchActivityCreateDataObject
  | ResearchActivityUpdateDataObject
  | ResearchLogCreateDataObject
  | ResearchLogUpdateDataObject
  | ResearchPhaseCreateDataObject
  | ResearchPhaseUpdateDataObject;
