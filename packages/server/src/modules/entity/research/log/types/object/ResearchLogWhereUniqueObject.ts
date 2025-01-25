// Validators
import { IsUUID } from 'class-validator';

export class ResearchLogWhereUniqueObject {
  @IsUUID()
  id: string;
}
