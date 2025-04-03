// Validators
import {
  IsJWT,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
// Types
import { EntityPayload } from '@researchmanager/shared/types';
// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Data
import { returnObjectBuilderDtoOptions } from '../options/parameter/dto';

export class ReturnObjectBuilderReturnObjectSwaggerWrapper {
  @ApiProperty(returnObjectBuilderDtoOptions['nbHits'])
  @IsNumber()
  @IsOptional()
  nbHits?: number;

  @ApiProperty(returnObjectBuilderDtoOptions['message'])
  @IsString()
  @IsOptional()
  message?: string | string[];

  @ApiProperty(returnObjectBuilderDtoOptions['notes'])
  @IsString()
  @IsOptional()
  notes?: string | string[];

  @ApiProperty(returnObjectBuilderDtoOptions['payload'])
  @IsObject()
  @IsOptional()
  payload?: EntityPayload | EntityPayload[];

  @ApiProperty(returnObjectBuilderDtoOptions['access_token'])
  @IsJWT()
  @IsOptional()
  access_token?: string;

  @ApiProperty(returnObjectBuilderDtoOptions['error'])
  @IsString()
  @IsOptional()
  error?: string;

  @ApiProperty(returnObjectBuilderDtoOptions['statusCode'])
  @IsNumber()
  @IsOptional()
  statusCode?: number;
}
