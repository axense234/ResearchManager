// Validators
import {
  IsString,
  IsOptional,
  IsObject,
  IsUUID,
  IsBoolean,
} from 'class-validator';

export class ResearchActivityCreateDataObject {
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
  researchPhases: {
    connect?: { id: string }[];
    create?: object;
  };

  @IsObject()
  @IsOptional()
  activityFeed: { connect?: { id: string }; create?: object };

  @IsObject()
  @IsOptional()
  tags: { connect: { id: string }[] };

  @IsUUID()
  userId: string;
}
