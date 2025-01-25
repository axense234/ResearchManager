import { DataObjectBuilderAllowedConnectValue } from 'src/modules/util/builder/types';

export const researchLogAllowedConnectValues: DataObjectBuilderAllowedConnectValue[] =
  [
    { entityType: 'tags', rel: 'MTM' },
    { entityType: 'userForArchivePurposes', rel: 'OTM' },
  ];
