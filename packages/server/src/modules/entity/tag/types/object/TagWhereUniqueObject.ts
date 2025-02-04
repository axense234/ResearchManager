// Validators
import { IsUUID } from 'class-validator';

export class TagWhereUniqueObject {
  @IsUUID()
  id: string;
}
