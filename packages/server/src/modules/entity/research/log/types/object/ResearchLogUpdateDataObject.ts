// Validators
import {
  IsString,
  IsOptional,
  IsObject,
  IsUUID,
  IsArray,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class ResearchLogUpdateDataObject {
  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  researchPoints?: number;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @IsArray()
  @IsOptional()
  imagesSrc?: string[];

  @IsObject()
  @IsOptional()
  tags?: { connect: { id: string }[] };

  @IsUUID()
  @IsOptional()
  researchPhaseId?: string;
}
