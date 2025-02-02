// Validators
import { IsUUID } from 'class-validator';

export class ActivityDayWhereUniqueObject {
  @IsUUID()
  id: string;
}
