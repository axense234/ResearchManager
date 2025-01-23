import { IsBoolean, IsOptional } from 'class-validator';

export class ResearchActivityIncludeObject {
  @IsBoolean()
  @IsOptional()
  user?: boolean;

  @IsBoolean()
  @IsOptional()
  userForArchivePurposes?: boolean;

  @IsBoolean()
  @IsOptional()
  activityFeed?: boolean;

  @IsBoolean()
  @IsOptional()
  tags?: boolean;

  @IsBoolean()
  @IsOptional()
  researchPhases?: boolean;
}
