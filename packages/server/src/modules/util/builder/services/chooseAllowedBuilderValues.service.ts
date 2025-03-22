// NestJS
import { Injectable } from '@nestjs/common';
// Types
import {
  ChooseAllowedBuilderValuesReturnObject,
  DataObjectBuilderAllowedConnectValue,
  EntityType,
} from '../types';
import { EntityTypePlural } from '@researchmanager/shared/types';
// Data
import {
  researchActivitiesAllowedSearchByKeyValues,
  researchActivitiesAllowedSortByKeysValues,
  researchActivityAllowedConnectValues,
  researchActivityAllowedIncludeValues,
  researchActivityAllowedSelectValues,
} from 'src/modules/entity/research/activity/data';
import {
  activityDayAllowedConnectValues,
  activityDayAllowedIncludeValues,
  activityDayAllowedSelectValues,
  activityDayAllowedSortByKeysValues,
  activityDaysAllowedSearchByKeyValues,
} from 'src/modules/entity/activity/day/data';
import {
  activityFeedAllowedConnectValues,
  activityFeedAllowedIncludeValues,
  activityFeedAllowedSelectValues,
  activityFeedAllowedSortByKeysValues,
  activityFeedsAllowedSearchByKeyValues,
} from 'src/modules/entity/activity/feed/data';
import {
  activityLogAllowedConnectValues,
  activityLogAllowedIncludeValues,
  activityLogAllowedSelectValues,
  activityLogAllowedSortByKeysValues,
  activityLogsAllowedSearchByKeyValues,
} from 'src/modules/entity/activity/log/data';
import {
  researchLogAllowedConnectValues,
  researchLogAllowedIncludeValues,
  researchLogAllowedSelectValues,
  researchLogsAllowedSearchByKeyValues,
  researchLogsAllowedSortByKeysValues,
} from 'src/modules/entity/research/log/data';
import {
  researchPhaseAllowedConnectValues,
  researchPhaseAllowedIncludeValues,
  researchPhaseAllowedSelectValues,
  researchPhaseAllowedSortByKeysValues,
  researchPhasesAllowedSearchByKeyValues,
} from 'src/modules/entity/research/phase/data';
import {
  researchSessionAllowedConnectValues,
  researchSessionAllowedIncludeValues,
  researchSessionAllowedSelectValues,
  researchSessionAllowedSortByKeysValues,
  researchSessionsAllowedSearchByKeyValues,
} from 'src/modules/entity/research/session/data';
import {
  settingsAllowedConnectValues,
  settingsAllowedIncludeValues,
  settingsAllowedSearchByKeyValues,
  settingsAllowedSelectValues,
  settingsAllowedSortByKeysValues,
} from 'src/modules/entity/settings/data';
import {
  tagAllowedConnectValues,
  tagAllowedIncludeValues,
  tagAllowedSelectValues,
  tagAllowedSortByKeysValues,
  tagsAllowedSearchByKeyValues,
} from 'src/modules/entity/tag/data';
import {
  userAllowedConnectValues,
  userAllowedIncludeValues,
  userAllowedSelectValues,
  userAllowedSortByKeysValues,
  usersAllowedSearchByKeyValues,
} from 'src/modules/entity/user/data';

@Injectable()
export class ChooseAllowedBuilderValuesService {
  constructor() {}

  chooseAllowedBuilderValues(
    entityType: EntityType,
  ): ChooseAllowedBuilderValuesReturnObject {
    let allowedIncludeValues: (EntityType | EntityTypePlural)[] = [];
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
  }
}
