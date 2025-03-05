// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class ResearchActivitySelectObject {
  @IsBoolean()
  @IsOptional()
  id?: boolean;

  @IsBoolean()
  @IsOptional()
  name?: boolean;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @IsBoolean()
  @IsOptional()
  backgroundColorOrImageSrc?: boolean;

  @IsBoolean()
  @IsOptional()
  userId?: boolean;

  @IsBoolean()
  @IsOptional()
  createdAt?: boolean;

  @IsBoolean()
  @IsOptional()
  updatedAt?: boolean;

  @IsBoolean()
  @IsOptional()
  user?: boolean;

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
