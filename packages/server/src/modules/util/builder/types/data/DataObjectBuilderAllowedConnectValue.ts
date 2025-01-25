// Types
import { EntityType } from '../general/EntityType';
import { EntityTypePlural } from '../general/EntityTypePlural';

export class DataObjectBuilderAllowedConnectValue {
  entityType: EntityType | EntityTypePlural;
  rel: 'OTM' | 'OTO' | 'MTM';
}
