// Validators
import { IsString, IsOptional, IsUUID, IsObject } from 'class-validator';

export class ResearchPhaseCreateDataObject {
  @IsString()
  @IsOptional()
  name: string;

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

  @IsUUID()
  userIdForArchivePurposes: string;
}
