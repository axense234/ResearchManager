// Types
import {
  ActivityFeedCreateDataObject,
  ActivityFeedUpdateDataObject,
} from 'src/modules/entity/activity/feed/types';
import {
  ActivityLogCreateDataObject,
  ActivityLogUpdateDataObject,
} from 'src/modules/entity/activity/log/types';
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
import {
  SettingsCreateDataObject,
  SettingsUpdateDataObject,
} from 'src/modules/entity/settings/types';
import {
  TagCreateDataObject,
  TagUpdateDataObject,
} from 'src/modules/entity/tag/types';
import { UserUpdateDataObject } from 'src/modules/entity/user/types';

export type DataObjectBuilderDataObject =
  | ResearchActivityCreateDataObject
  | ResearchActivityUpdateDataObject
  | ResearchLogCreateDataObject
  | ResearchLogUpdateDataObject
  | ResearchPhaseCreateDataObject
  | ResearchPhaseUpdateDataObject
  | ResearchSessionCreateDataObject
  | ResearchSessionUpdateDataObject
  | SettingsCreateDataObject
  | SettingsUpdateDataObject
  | ActivityFeedCreateDataObject
  | ActivityFeedUpdateDataObject
  | ActivityLogCreateDataObject
  | ActivityLogUpdateDataObject
  | TagCreateDataObject
  | TagUpdateDataObject
  | UserUpdateDataObject;
