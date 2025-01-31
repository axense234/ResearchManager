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
import {
  ResearchSessionCreateDataObject,
  ResearchSessionUpdateDataObject,
} from 'src/modules/entity/research/session/types';
import { SettingsCreateDataObject } from 'src/modules/entity/settings/types';

export type DataObjectBuilderDataObject =
  | ResearchActivityCreateDataObject
  | ResearchActivityUpdateDataObject
  | ResearchLogCreateDataObject
  | ResearchLogUpdateDataObject
  | ResearchPhaseCreateDataObject
  | ResearchPhaseUpdateDataObject
  | ResearchSessionCreateDataObject
  | ResearchSessionUpdateDataObject
  | SettingsCreateDataObject;
