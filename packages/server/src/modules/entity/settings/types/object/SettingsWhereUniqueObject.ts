// Validators
import { IsUUID } from 'class-validator';

export class SettingsWhereUniqueObject {
  @IsUUID()
  id: string;
}
