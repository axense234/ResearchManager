// Prisma
import { ActivityFeedType } from '@prisma/client';
// Validators
import { IsEnum, IsObject, IsOptional, IsUUID } from 'class-validator';

export class ActivityFeedCreateDataObject {
  @IsEnum(ActivityFeedType)
  @IsOptional()
  type: ActivityFeedType;

  @IsUUID()
  @IsOptional()
  userId: string;

  @IsUUID()
  @IsOptional()
  researchActivityId: string;

  @IsObject()
  @IsOptional()
  dayActivities: { connect: { id: string }[] };
}
