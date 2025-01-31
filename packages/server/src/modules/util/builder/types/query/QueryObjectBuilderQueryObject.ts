// Types
import { ResearchActivityQueryObject } from 'src/modules/entity/research/activity/types';
import { ResearchLogQueryObject } from 'src/modules/entity/research/log/types';
import { ResearchPhaseQueryObject } from 'src/modules/entity/research/phase/types';
import { ResearchSessionQueryObject } from 'src/modules/entity/research/session/types';
import { SettingsQueryObject } from 'src/modules/entity/settings/types';

export type QueryObjectBuilderQueryObject = ResearchActivityQueryObject &
  ResearchLogQueryObject &
  ResearchPhaseQueryObject &
  ResearchSessionQueryObject &
  SettingsQueryObject;
