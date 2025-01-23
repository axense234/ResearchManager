import { ResearchActivity } from '@prisma/client';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

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
  payload?: ResearchActivity | ResearchActivity[];
}
