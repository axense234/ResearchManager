// Types
import { ActionType } from '@researchmanager/shared/types';
import { EntityType } from '../general';
import { DataObjectBuilderParamsOptions } from './DataObjectBuilderParamsOptions';

export class DataObjectBuilderParams {
  dto: any;
  entityType: EntityType;
  actionType: ActionType;
  options?: DataObjectBuilderParamsOptions;
}
