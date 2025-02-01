// Validators
import { IsObject, IsOptional, IsString, IsUUID } from 'class-validator';

export class ActivityFeedUpdateDataObject {
  @IsObject()
  @IsOptional()
  dayActivities: { connect: { id: string }[] };

  @IsString()
  @IsOptional()
  type: 'RESEARCH_ACTIVITY' | 'USER';

  @IsUUID()
  @IsOptional()
  userId: string;

  @IsUUID()
  @IsOptional()
  researchActivityId: string;
}
