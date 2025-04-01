// Swagger
import { ApiProperty } from '@nestjs/swagger';
import { createResearchActivityDtoOptions } from '../options/parameter';
// Validators
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsArray,
  IsUUID,
} from 'class-validator';

export class CreateResearchActivityDtoSwaggerWrapper {
  @ApiProperty(createResearchActivityDtoOptions['name'])
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty(createResearchActivityDtoOptions['archived'])
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty(createResearchActivityDtoOptions['backgroundColorOrImageSrc'])
  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @ApiProperty(createResearchActivityDtoOptions['researchPhases'])
  @IsArray()
  @IsOptional()
  researchPhases?: string[];

  @ApiProperty(createResearchActivityDtoOptions['activityFeed'])
  @IsString()
  @IsOptional()
  activityFeed?: string;

  @ApiProperty(createResearchActivityDtoOptions['tags'])
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty(createResearchActivityDtoOptions['userId'])
  @IsUUID()
  userId: string;
}
