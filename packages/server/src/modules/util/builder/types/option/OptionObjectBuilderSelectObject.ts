// NestJS
import { ActivityFeedSelectObject } from 'src/modules/entity/activity/feed/types';
import { ResearchActivitySelectObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogSelectObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseSelectObject } from 'src/modules/entity/research/phase/types';
import { ResearchSessionSelectObject } from 'src/modules/entity/research/session/types';
import { SettingsSelectObject } from 'src/modules/entity/settings/types';

export type OptionObjectBuilderSelectObject = ResearchActivitySelectObject &
  ResearchLogSelectObject &
  ResearchPhaseSelectObject &
  ResearchSessionSelectObject &
  SettingsSelectObject &
  ActivityFeedSelectObject;
