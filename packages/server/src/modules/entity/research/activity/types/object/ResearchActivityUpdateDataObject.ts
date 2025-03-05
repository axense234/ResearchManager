// Validators
import {
  IsString,
  IsOptional,
  IsObject,
  IsUUID,
  IsBoolean,
} from 'class-validator';

export class ResearchActivityUpdateDataObject {
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
}
