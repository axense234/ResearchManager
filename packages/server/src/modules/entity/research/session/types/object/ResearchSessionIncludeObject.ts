// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ResearchSessionIncludeObject {
  @IsBoolean()
  @IsOptional()
  researchPhase?: boolean;

  @IsBoolean()
  @IsOptional()
  tags?: boolean;
}
