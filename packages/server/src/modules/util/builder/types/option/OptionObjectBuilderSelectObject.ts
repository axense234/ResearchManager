// NestJS
import { ActivityDaySelectObject } from 'src/modules/entity/activity/day/types';
import { ActivityFeedSelectObject } from 'src/modules/entity/activity/feed/types';
import { ActivityLogSelectObject } from 'src/modules/entity/activity/log/types';
import { ResearchActivitySelectObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogSelectObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseSelectObject } from 'src/modules/entity/research/phase/types';
import { ResearchSessionSelectObject } from 'src/modules/entity/research/session/types';
import { SettingsSelectObject } from 'src/modules/entity/settings/types';
import { TagSelectObject } from 'src/modules/entity/tag/types';

export type OptionObjectBuilderSelectObject = ResearchActivitySelectObject &
  ResearchLogSelectObject &
  ResearchPhaseSelectObject &
  ResearchSessionSelectObject &
  SettingsSelectObject &
  ActivityFeedSelectObject &
  ActivityDaySelectObject &
  ActivityLogSelectObject &
  TagSelectObject;
