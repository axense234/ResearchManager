import { IsObject, IsOptional, IsString } from 'class-validator';

export class SettingsQueryObject {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsObject()
  searchByKey?: { contains: string };
}
