// Types
import { EntityType } from '../general/EntityType';
import { EntityTypePlural } from '@researchmanager/shared/types';

export class DataObjectBuilderAllowedConnectValue {
  entityType: EntityType | EntityTypePlural;
  rel: 'OTM' | 'OTO' | 'MTM';
}
