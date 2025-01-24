// Validators
import { IsOptional, IsString } from 'class-validator';
// Types
import { QueryObjectBuilderQueryObject } from './QueryObjectBuilderQueryObject';

export class QueryObjectBuilderReturnObject {
  @IsString()
  @IsOptional()
  additionalNotes: string;

  queryObject: QueryObjectBuilderQueryObject;
}
