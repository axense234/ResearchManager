// Types
import { ActionType, EntityType } from '@researchmanager/shared/types';
import { DataObjectBuilderParamsOptions } from './DataObjectBuilderParamsOptions';

export class DataObjectBuilderParams {
  dto: any;
  entityType: EntityType;
  actionType: ActionType;
  options?: DataObjectBuilderParamsOptions;
}
