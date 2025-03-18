// Validators
import { IsArray, IsEnum, IsOptional, IsString } from "class-validator";
// Prisma
import { ActivitySubject } from "@prisma/client";

export class UpdateActivityLogDto {
  @IsEnum(ActivitySubject)
  @IsOptional()
  subject?: ActivitySubject;

  @IsString()
  @IsOptional()
  message?: string;

  @IsArray()
  @IsOptional()
  activityDays?: string[];
}
