// Types
import { EntityType } from 'src/modules/util/builder/types';
import type { EntityTypePlural } from '@researchmanager/shared/types';

export const entityTypeToPlural = (
  entityType: EntityType | EntityTypePlural,
): EntityTypePlural => {
  let allowedIncludeValue: EntityTypePlural = entityType as EntityTypePlural;
  switch (entityType) {
    case 'researchActivity':
      allowedIncludeValue = 'researchActivities';
      break;
    case 'researchPhase':
      allowedIncludeValue = 'researchPhases';
      break;
    case 'researchLog':
      allowedIncludeValue = 'researchLogs';
      break;
    case 'researchSession':
      allowedIncludeValue = 'researchSessions';
      break;
    case 'activityFeed':
      allowedIncludeValue = 'activityFeeds';
      break;
    case 'activityDay':
      allowedIncludeValue = 'activityDays';
      break;
    case 'activityLog':
      allowedIncludeValue = 'activityLogs';
      break;
    case 'user':
      allowedIncludeValue = 'users';
      break;
    case 'settings':
      allowedIncludeValue = 'settings';
      break;
    case 'tag':
      allowedIncludeValue = 'tags';
      break;
    default:
      break;
  }
  return allowedIncludeValue;
};
