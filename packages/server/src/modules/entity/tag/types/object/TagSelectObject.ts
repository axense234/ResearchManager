// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class TagSelectObject {
  @IsBoolean()
  @IsOptional()
  id?: boolean;

  @IsBoolean()
  @IsOptional()
  title?: boolean;

  @IsBoolean()
  @IsOptional()
  backgroundColorOrImageSrc?: boolean;

  @IsBoolean()
  @IsOptional()
  fontSize?: boolean;

  @IsBoolean()
  @IsOptional()
  fontFamily?: boolean;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;

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
  researchActivities?: boolean;

  @IsBoolean()
  @IsOptional()
  researchPhases?: boolean;

  @IsBoolean()
  @IsOptional()
  researchLogs?: boolean;

  @IsBoolean()
  @IsOptional()
  researchSessions?: boolean;

  @IsBoolean()
  @IsOptional()
  user?: boolean;
}
