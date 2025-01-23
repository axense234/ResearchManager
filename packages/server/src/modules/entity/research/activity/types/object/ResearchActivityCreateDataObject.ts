import { IsString, IsOptional, IsObject, IsUUID } from 'class-validator';

export class ResearchActivityCreateDataObject {
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
  userId: string;

  @IsUUID()
  userIdForArchivePurposes: string;
}
