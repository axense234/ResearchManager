// Validators
import { IsObject, IsOptional, IsString, IsUUID } from 'class-validator';

export class ResearchPhaseUpdateDataObject {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc?: string;

  @IsObject()
  @IsOptional()
  researchSessions: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  researchLogs: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  tags: { connect: { id: string }[] };

  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes?: string;
}
