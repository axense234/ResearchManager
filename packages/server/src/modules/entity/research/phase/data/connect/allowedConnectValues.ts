import { DataObjectBuilderAllowedConnectValue } from 'src/modules/util/builder/types';

export const researchPhaseAllowedConnectValues: DataObjectBuilderAllowedConnectValue[] =
  [
    { entityType: 'researchLogs', rel: 'OTM' },
    { entityType: 'researchSessions', rel: 'OTM' },
    { entityType: 'tags', rel: 'MTM' },
  ];
