// Validators
import { IsObject, IsOptional, IsString } from 'class-validator';

export class ResearchLogQueryObject {
  @IsOptional()
  @IsString()
  researchPhaseId?: string;

  @IsOptional()
  @IsObject()
  searchByKey?: { contains: string };
}
