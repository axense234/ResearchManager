// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { updateResearchActivityDtoOptions } from '../options/parameter';
// Validators
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsArray,
  IsUUID,
} from 'class-validator';

export class UpdateResearchActivityDtoSwaggerWrapper {
  @ApiProperty(updateResearchActivityDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(updateResearchActivityDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(updateResearchActivityDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(updateResearchActivityDtoOptions['researchPhases'])
  @IsArray()
  @IsOptional()
  researchPhases?: string[];

  @ApiProperty(updateResearchActivityDtoOptions['activityFeed'])
  @IsString()
  @IsOptional()
  activityFeed?: string;

  @ApiProperty(updateResearchActivityDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty(updateResearchActivityDtoOptions['userId'])
  @IsUUID()
  @IsOptional()
  userId?: string;
}
