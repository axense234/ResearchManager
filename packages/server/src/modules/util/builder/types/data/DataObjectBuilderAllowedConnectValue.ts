// Types
import { EntityType, EntityTypePlural } from '@researchmanager/shared/types';

export class DataObjectBuilderAllowedConnectValue {
  entityType: EntityType | EntityTypePlural;
  rel: 'OTM' | 'OTO' | 'MTM';
}
