// Types
import { ActivityDayIncludeObject } from 'src/modules/entity/activity/day/types';
import { ActivityFeedIncludeObject } from 'src/modules/entity/activity/feed/types';
import { ActivityLogIncludeObject } from 'src/modules/entity/activity/log/types';
import { ResearchActivityIncludeObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogIncludeObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseIncludeObject } from 'src/modules/entity/research/phase/types';
import { ResearchSessionIncludeObject } from 'src/modules/entity/research/session/types';
import { SettingsIncludeObject } from 'src/modules/entity/settings/types';
import { TagIncludeObject } from 'src/modules/entity/tag/types';

export type OptionObjectBuilderIncludeObject = ResearchActivityIncludeObject &
  ResearchLogIncludeObject &
  ResearchPhaseIncludeObject &
  ResearchSessionIncludeObject &
  SettingsIncludeObject &
  ActivityFeedIncludeObject &
  ActivityDayIncludeObject &
  ActivityLogIncludeObject &
  TagIncludeObject;
