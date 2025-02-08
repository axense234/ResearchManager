// Validators
import { IsObject, IsOptional, IsUUID } from 'class-validator';

export class ActivityDayCreateDataObject {
  @IsUUID()
  activityFeedId: string;

  @IsObject()
  @IsOptional()
  activityLogs: { connect: { id: string }[] };
}
