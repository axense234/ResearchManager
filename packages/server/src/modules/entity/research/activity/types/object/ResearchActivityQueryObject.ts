import { IsObject, IsOptional, IsString } from 'class-validator';

export class ResearchActivityQueryObject {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsObject()
  searchByKey?: { contains: string };
}
