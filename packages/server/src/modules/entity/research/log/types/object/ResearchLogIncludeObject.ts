// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ResearchLogIncludeObject {
  @IsBoolean()
  @IsOptional()
  researchPhase?: boolean;

  @IsBoolean()
  @IsOptional()
  tags?: boolean;
}
