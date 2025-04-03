// Types
import { EntityType, EntityTypePlural } from '@researchmanager/shared/types';

export const entityTypeToSingle = (
  entityType: EntityType | EntityTypePlural,
): EntityType => {
  let allowedIncludeValue: EntityType = entityType as EntityType;
  switch (entityType) {
    case 'researchActivities':
      allowedIncludeValue = 'researchActivity';
      break;
    case 'researchPhases':
      allowedIncludeValue = 'researchPhase';
      break;
    case 'researchLogs':
      allowedIncludeValue = 'researchLog';
      break;
    case 'researchSessions':
      allowedIncludeValue = 'researchSession';
      break;
    case 'activityFeeds':
      allowedIncludeValue = 'activityFeed';
      break;
    case 'activityDays':
      allowedIncludeValue = 'activityDay';
      break;
    case 'activityLogs':
      allowedIncludeValue = 'activityLog';
      break;
    case 'users':
      allowedIncludeValue = 'user';
      break;
    case 'settings':
      allowedIncludeValue = 'settings';
      break;
    case 'tags':
      allowedIncludeValue = 'tag';
      break;
    default:
      break;
  }
  return allowedIncludeValue;
};
