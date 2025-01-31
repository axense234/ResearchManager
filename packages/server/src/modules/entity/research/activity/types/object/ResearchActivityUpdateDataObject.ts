// Validators
import { IsString, IsOptional, IsObject, IsUUID } from 'class-validator';

export class ResearchActivityUpdateDataObject {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsObject()
  @IsOptional()
  researchPhases: { connect: { id: string }[] };

  @IsObject()
  @IsOptional()
  activityFeed: { connect: { id: string } };

  @IsObject()
  @IsOptional()
  tags: { connect: { id: string }[] };

  @IsUUID()
  @IsOptional()
  userId: string;

  @IsUUID()
  @IsOptional()
  userIdForArchivePurposes: string;
}
