// Validators
import { IsObject, IsOptional, IsUUID } from 'class-validator';

export class ActivityDayUpdateDataObject {
  @IsObject()
  @IsOptional()
  activityLogs: { connect: { id: string }[] };

  @IsUUID()
  @IsOptional()
  activityFeedId: string;
}
