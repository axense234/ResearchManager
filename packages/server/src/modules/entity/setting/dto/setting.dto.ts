import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSettingDto {
  @IsString()
  label: string;

  @IsString()
  value: string; // note: this will usually contain stringified values, not pure strings

  @IsUUID()
  userId: string;
}

export class UpdateSettingDto {
  @IsString()
  @IsOptional()
  label: string;

  @IsString()
  @IsOptional()
  value: string; // note: this will usually contain stringified values, not pure strings

  @IsUUID()
  @IsOptional()
  userId: string;
}
