// Types
import { ActivityDayWhereObject } from 'src/modules/entity/activity/day/types';
import { ActivityFeedWhereObject } from 'src/modules/entity/activity/feed/types';
import { ActivityLogWhereObject } from 'src/modules/entity/activity/log/types';
import { ResearchActivityWhereObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogWhereObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseWhereObject } from 'src/modules/entity/research/phase/types';
import { ResearchSessionWhereObject } from 'src/modules/entity/research/session/types';
import { SettingsWhereObject } from 'src/modules/entity/settings/types';

export type QueryObjectBuilderQueryObject = ResearchActivityWhereObject &
  ResearchLogWhereObject &
  ResearchPhaseWhereObject &
  ResearchSessionWhereObject &
  SettingsWhereObject &
  ActivityFeedWhereObject &
  ActivityDayWhereObject &
  ActivityLogWhereObject;
