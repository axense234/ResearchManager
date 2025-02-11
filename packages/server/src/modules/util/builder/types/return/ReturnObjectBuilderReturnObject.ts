// Validators
import {
  IsJWT,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
// Types
import { Entity } from '../general/Entity';
// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Data
import { returnObjectBuilderDtoOptions } from '../../data/swagger';

export class ReturnObjectBuilderReturnObject {
  @ApiProperty(returnObjectBuilderDtoOptions['nbHits'])
  @IsNumber()
  @IsOptional()
  nbHits?: number;

  @ApiProperty(returnObjectBuilderDtoOptions['message'])
  @IsString()
  @IsOptional()
  message?: string;

  @ApiProperty(returnObjectBuilderDtoOptions['notes'])
  @IsString()
  @IsOptional()
  notes?: string | string[];

  @ApiProperty(returnObjectBuilderDtoOptions['payload'])
  @IsObject()
  @IsOptional()
  payload?: Entity | Entity[];

  @ApiProperty(returnObjectBuilderDtoOptions['access_token'])
  @IsJWT()
  @IsOptional()
  access_token?: string;

  @ApiProperty(returnObjectBuilderDtoOptions['statusCode'])
  @IsNumber()
  @IsOptional()
  statusCode?: number;
}
