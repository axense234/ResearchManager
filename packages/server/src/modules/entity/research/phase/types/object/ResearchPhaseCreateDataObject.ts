// Validators
import {
  IsString,
  IsOptional,
  IsUUID,
  IsObject,
  IsBoolean,
} from 'class-validator';

export class ResearchPhaseCreateDataObject {
  @IsString()
  @IsOptional()
  name: string;

  @IsBoolean()
  @IsOptional()
  archived: boolean;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsObject()
  @IsOptional()
  researchLogs: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  researchSessions: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  tags: { connect: { id: string }[] };

  @IsUUID()
  researchActivityId: string;
}
