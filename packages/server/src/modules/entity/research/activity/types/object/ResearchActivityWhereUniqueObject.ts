// Validators
import { IsUUID } from 'class-validator';

export class ResearchActivityWhereUniqueObject {
  @IsUUID()
  id: string;
}
