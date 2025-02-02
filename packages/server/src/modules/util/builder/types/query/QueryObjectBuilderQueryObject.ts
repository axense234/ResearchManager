// Types
import { ActivityDayQueryObject } from 'src/modules/entity/activity/day/types/object/ActivityDayQueryObject';
import { ActivityFeedQueryObject } from 'src/modules/entity/activity/feed/types';
import { ResearchActivityQueryObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogQueryObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseQueryObject } from 'src/modules/entity/research/phase/types';
import { ResearchSessionQueryObject } from 'src/modules/entity/research/session/types';
import { SettingsQueryObject } from 'src/modules/entity/settings/types';

export type QueryObjectBuilderQueryObject = ResearchActivityQueryObject &
  ResearchLogQueryObject &
  ResearchPhaseQueryObject &
  ResearchSessionQueryObject &
  SettingsQueryObject &
  ActivityFeedQueryObject &
  ActivityDayQueryObject;
