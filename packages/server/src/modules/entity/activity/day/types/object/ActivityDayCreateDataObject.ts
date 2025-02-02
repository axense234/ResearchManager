// Validators
import { IsObject, IsOptional, IsUUID } from 'class-validator';

export class ActivityDayCreateDataObject {
  @IsObject()
  @IsOptional()
  activityLogs: { connect: { id: string }[] };

  @IsUUID()
  activityFeedId: string;
}
