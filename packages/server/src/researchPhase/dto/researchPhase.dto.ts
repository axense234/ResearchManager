import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateResearchPhaseDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  backgroundColorOrImageSrc: string;

  @IsUUID()
  researchActivityId: string;

  @IsUUID()
  userIdForArchivePurposes: string;
}
