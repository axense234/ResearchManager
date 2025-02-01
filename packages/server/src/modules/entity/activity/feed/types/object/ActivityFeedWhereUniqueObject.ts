// Validators
import { IsUUID } from 'class-validator';

export class ActivityFeedWhereUniqueObject {
  @IsUUID()
  id: string;
}
