import { DataObjectBuilderAllowedConnectValue } from 'src/modules/util/builder/types';

export const tagAllowedConnectValues: DataObjectBuilderAllowedConnectValue[] = [
  { entityType: 'researchActivities', rel: 'MTM' },
  { entityType: 'researchPhases', rel: 'MTM' },
  { entityType: 'researchLogs', rel: 'MTM' },
  { entityType: 'researchSessions', rel: 'MTM' },
];
