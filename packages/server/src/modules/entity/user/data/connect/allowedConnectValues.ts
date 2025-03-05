import { DataObjectBuilderAllowedConnectValue } from 'src/modules/util/builder/types';

export const userAllowedConnectValues: DataObjectBuilderAllowedConnectValue[] =
  [
    { entityType: 'activityFeeds', rel: 'OTM' },
    { entityType: 'tags', rel: 'OTM' },
    { entityType: 'researchActivities', rel: 'OTM' },
  ];
