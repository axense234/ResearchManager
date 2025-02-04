import { DataObjectBuilderAllowedConnectValue } from 'src/modules/util/builder/types';

export const researchActivityAllowedConnectValues: DataObjectBuilderAllowedConnectValue[] =
  [
    { entityType: 'researchPhases', rel: 'OTM' },
    { entityType: 'tags', rel: 'MTM' },
    { entityType: 'activityFeed', rel: 'OTO' },
    { entityType: 'userForArchivePurposes', rel: 'OTM' },
  ];
