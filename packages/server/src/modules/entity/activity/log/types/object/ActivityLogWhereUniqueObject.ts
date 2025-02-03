// Validators
import { IsUUID } from 'class-validator';

export class ActivityLogWhereUniqueObject {
  @IsUUID()
  id: string;
}
