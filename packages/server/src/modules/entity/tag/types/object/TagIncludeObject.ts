// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class TagIncludeObject {
  @IsBoolean()
  @IsOptional()
  researchActivities?: boolean;

  @IsBoolean()
  @IsOptional()
  researchPhases?: boolean;

  @IsBoolean()
  @IsOptional()
  researchSessions?: boolean;

  @IsBoolean()
  @IsOptional()
  researchLogs?: boolean;

  @IsBoolean()
  @IsOptional()
  user?: boolean;
}
