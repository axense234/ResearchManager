import { DataObjectBuilderAllowedConnectValue } from 'src/modules/util/builder/types';

export const userAllowedConnectValues: DataObjectBuilderAllowedConnectValue[] =
  [
    { entityType: 'activityFeeds', rel: 'OTM' },
    { entityType: 'tags', rel: 'OTM' },
    { entityType: 'researchActivities', rel: 'OTM' },
    { entityType: 'archivedTags', rel: 'OTM' },
    { entityType: 'archivedResearchActivities', rel: 'OTM' },
    { entityType: 'archivedResearchPhases', rel: 'OTM' },
    { entityType: 'archivedResearchSessions', rel: 'OTM' },
    { entityType: 'archivedResearchLogs', rel: 'OTM' },
  ];
