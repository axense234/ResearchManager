// Types
import { EntityType } from '@researchmanager/shared/types';
// Data
import {
  activityDayAllowedIncludeValues,
  activityDayAllowedSelectValues,
  activityDaysAllowedSearchByKeyValues,
  activityDayAllowedSortByKeysValues,
  activityDayAllowedConnectValues,
} from 'src/modules/entity/activity/day/data';
import {
  activityFeedAllowedIncludeValues,
  activityFeedAllowedSelectValues,
  activityFeedsAllowedSearchByKeyValues,
  activityFeedAllowedSortByKeysValues,
  activityFeedAllowedConnectValues,
} from 'src/modules/entity/activity/feed/data';
import {
  activityLogAllowedIncludeValues,
  activityLogAllowedSelectValues,
  activityLogsAllowedSearchByKeyValues,
  activityLogAllowedSortByKeysValues,
  activityLogAllowedConnectValues,
} from 'src/modules/entity/activity/log/data';
import {
  researchActivityAllowedIncludeValues,
  researchActivityAllowedSelectValues,
  researchActivitiesAllowedSearchByKeyValues,
  researchActivitiesAllowedSortByKeysValues,
  researchActivityAllowedConnectValues,
} from 'src/modules/entity/research/activity/data';
import {
  researchLogAllowedIncludeValues,
  researchLogAllowedSelectValues,
  researchLogsAllowedSearchByKeyValues,
  researchLogsAllowedSortByKeysValues,
  researchLogAllowedConnectValues,
} from 'src/modules/entity/research/log/data';
import {
  researchPhaseAllowedIncludeValues,
  researchPhaseAllowedSelectValues,
  researchPhasesAllowedSearchByKeyValues,
  researchPhaseAllowedSortByKeysValues,
  researchPhaseAllowedConnectValues,
} from 'src/modules/entity/research/phase/data';
import {
  researchSessionAllowedIncludeValues,
  researchSessionAllowedSelectValues,
  researchSessionsAllowedSearchByKeyValues,
  researchSessionAllowedSortByKeysValues,
  researchSessionAllowedConnectValues,
} from 'src/modules/entity/research/session/data';
import {
  settingsAllowedIncludeValues,
  settingsAllowedSelectValues,
  settingsAllowedSearchByKeyValues,
  settingsAllowedSortByKeysValues,
  settingsAllowedConnectValues,
} from 'src/modules/entity/settings/data';
import {
  tagAllowedIncludeValues,
  tagAllowedSelectValues,
  tagsAllowedSearchByKeyValues,
  tagAllowedSortByKeysValues,
  tagAllowedConnectValues,
} from 'src/modules/entity/tag/data';
import {
  userAllowedIncludeValues,
  userAllowedSelectValues,
  usersAllowedSearchByKeyValues,
  userAllowedSortByKeysValues,
  userAllowedConnectValues,
} from 'src/modules/entity/user/data';
import {
  AllowedIncludeValue,
  ChooseAllowedBuilderValuesReturnObject,
  DataObjectBuilderAllowedConnectValue,
} from 'src/modules/util/builder/types';

export const chooseAllowedBuilderValues = (
  entityType: EntityType,
): ChooseAllowedBuilderValuesReturnObject => {
  let allowedIncludeValues: AllowedIncludeValue[] = [];
  let allowedSelectValues: string[] = [];
  let allowedSearchByKeyValues: string[] = [];
  let allowedSortByKeysValues: string[] = [];
  let allowedConnectValues: DataObjectBuilderAllowedConnectValue[] = [];

  switch (entityType) {
    case 'researchActivity':
      allowedIncludeValues = researchActivityAllowedIncludeValues;
      allowedSelectValues = researchActivityAllowedSelectValues;
      allowedSearchByKeyValues = researchActivitiesAllowedSearchByKeyValues;
      allowedSortByKeysValues = researchActivitiesAllowedSortByKeysValues;
      allowedConnectValues = researchActivityAllowedConnectValues;
      break;
    case 'researchPhase':
      allowedIncludeValues = researchPhaseAllowedIncludeValues;
      allowedSelectValues = researchPhaseAllowedSelectValues;
      allowedSearchByKeyValues = researchPhasesAllowedSearchByKeyValues;
      allowedSortByKeysValues = researchPhaseAllowedSortByKeysValues;
      allowedConnectValues = researchPhaseAllowedConnectValues;
      break;
    case 'researchSession':
      allowedIncludeValues = researchSessionAllowedIncludeValues;
      allowedSelectValues = researchSessionAllowedSelectValues;
      allowedSearchByKeyValues = researchSessionsAllowedSearchByKeyValues;
      allowedSortByKeysValues = researchSessionAllowedSortByKeysValues;
      allowedConnectValues = researchSessionAllowedConnectValues;
      break;
    case 'researchLog':
      allowedIncludeValues = researchLogAllowedIncludeValues;
      allowedSelectValues = researchLogAllowedSelectValues;
      allowedSearchByKeyValues = researchLogsAllowedSearchByKeyValues;
      allowedSortByKeysValues = researchLogsAllowedSortByKeysValues;
      allowedConnectValues = researchLogAllowedConnectValues;
      break;
    case 'settings':
      allowedIncludeValues = settingsAllowedIncludeValues;
      allowedSelectValues = settingsAllowedSelectValues;
      allowedSearchByKeyValues = settingsAllowedSearchByKeyValues;
      allowedSortByKeysValues = settingsAllowedSortByKeysValues;
      allowedConnectValues = settingsAllowedConnectValues;
      break;
    case 'tag':
      allowedIncludeValues = tagAllowedIncludeValues;
      allowedSelectValues = tagAllowedSelectValues;
      allowedSearchByKeyValues = tagsAllowedSearchByKeyValues;
      allowedSortByKeysValues = tagAllowedSortByKeysValues;
      allowedConnectValues = tagAllowedConnectValues;
      break;
    case 'activityFeed':
      allowedIncludeValues = activityFeedAllowedIncludeValues;
      allowedSelectValues = activityFeedAllowedSelectValues;
      allowedSearchByKeyValues = activityFeedsAllowedSearchByKeyValues;
      allowedSortByKeysValues = activityFeedAllowedSortByKeysValues;
      allowedConnectValues = activityFeedAllowedConnectValues;
      break;
    case 'activityDay':
      allowedIncludeValues = activityDayAllowedIncludeValues;
      allowedSelectValues = activityDayAllowedSelectValues;
      allowedSearchByKeyValues = activityDaysAllowedSearchByKeyValues;
      allowedSortByKeysValues = activityDayAllowedSortByKeysValues;
      allowedConnectValues = activityDayAllowedConnectValues;
      break;
    case 'activityLog':
      allowedIncludeValues = activityLogAllowedIncludeValues;
      allowedSelectValues = activityLogAllowedSelectValues;
      allowedSearchByKeyValues = activityLogsAllowedSearchByKeyValues;
      allowedSortByKeysValues = activityLogAllowedSortByKeysValues;
      allowedConnectValues = activityLogAllowedConnectValues;
      break;
    case 'user':
      allowedIncludeValues = userAllowedIncludeValues;
      allowedSelectValues = userAllowedSelectValues;
      allowedSearchByKeyValues = usersAllowedSearchByKeyValues;
      allowedSortByKeysValues = userAllowedSortByKeysValues;
      allowedConnectValues = userAllowedConnectValues;
      break;
    default:
      break;
  }

  return {
    allowedIncludeValues,
    allowedSelectValues,
    allowedConnectValues,
    allowedSearchByKeyValues,
    allowedSortByKeysValues,
  };
};
