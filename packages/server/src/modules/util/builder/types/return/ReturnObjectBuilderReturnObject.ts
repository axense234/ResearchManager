// Validators
import {
  IsJWT,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
// Types
import { Entity } from '../general/Entity';

export class ReturnObjectBuilderReturnObject {
  @IsNumber()
  @IsOptional()
  nbHits?: number;

  @IsString()
  @IsOptional()
  message?: string;

  @IsOptional()
  notes?: string | string[];

  @ValidateNested()
  @IsOptional()
  payload?: Entity | Entity[];

  @IsJWT()
  @IsOptional()
  access_token?: string;
}
