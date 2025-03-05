// Types
import { ActionType, EntityType } from '../general';
import { DataObjectBuilderParamsOptions } from './DataObjectBuilderParamsOptions';

export class DataObjectBuilderParams {
  dto: any;
  entityType: EntityType;
  actionType: ActionType;
  options?: DataObjectBuilderParamsOptions;
}
