// Validators
import { IsOptional, IsString } from 'class-validator';
// Types
import { OrderByObjectBuilderOrderByObject } from './OrderByObjectBuilderOrderByObject';

export class OrderByObjectBuilderReturnObject {
  @IsString()
  @IsOptional()
  additionalNotes: string;

  orderByObject: OrderByObjectBuilderOrderByObject[];
}
