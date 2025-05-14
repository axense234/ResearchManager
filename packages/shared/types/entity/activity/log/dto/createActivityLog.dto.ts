// Validators
import { IsArray, IsEnum, IsOptional, IsString } from "class-validator";
// Prisma
import { ActivitySubject } from "@prisma/client";

export class CreateActivityLogDto {
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

// we have all the activity days
// when we try to create an activity log on a different day, we need the activity day id of the respective day
// if we do have it in our activity days, we just straight up create an activity log
// if we do not have it in our activity days, we can either create an activity day with our activity feed id and its activity log
