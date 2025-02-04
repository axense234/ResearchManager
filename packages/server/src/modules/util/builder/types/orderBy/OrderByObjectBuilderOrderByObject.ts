// Types
import { ActivityDayOrderByObject } from 'src/modules/entity/activity/day/types';
import { ActivityFeedOrderByObject } from 'src/modules/entity/activity/feed/types';
import { ActivityLogOrderByObject } from 'src/modules/entity/activity/log/types';
import { ResearchActivityOrderByObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogOrderByObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseOrderByObject } from 'src/modules/entity/research/phase/types';
import { ResearchSessionOrderByObject } from 'src/modules/entity/research/session/types';
import { SettingsOrderByObject } from 'src/modules/entity/settings/types';
import { TagOrderByObject } from 'src/modules/entity/tag/types';

export type OrderByObjectBuilderOrderByObject =
  | ResearchActivityOrderByObject
  | ResearchLogOrderByObject
  | ResearchPhaseOrderByObject
  | ResearchSessionOrderByObject
  | SettingsOrderByObject
  | ActivityFeedOrderByObject
  | ActivityDayOrderByObject
  | ActivityLogOrderByObject
  | TagOrderByObject;
