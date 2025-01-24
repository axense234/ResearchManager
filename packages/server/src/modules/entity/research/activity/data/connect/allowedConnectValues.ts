import { DataObjectBuilderAllowedConnectValue } from 'src/modules/util/builder/types';

export const researchActivityAllowedConnectValues: DataObjectBuilderAllowedConnectValue[] =
  [
    { entityType: 'researchPhases', rel: 'OTM' },
    { entityType: 'tags', rel: 'OTM' },
    { entityType: 'activityFeed', rel: 'OTO' },
  ];
