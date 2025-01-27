// Validators
import { IsOptional, IsString, IsObject } from 'class-validator';

export class ResearchPhaseQueryObject {
  @IsOptional()
  @IsString()
  researchActivityId?: string;

  @IsOptional()
  @IsObject()
  searchByKey?: { contains: string };
}
