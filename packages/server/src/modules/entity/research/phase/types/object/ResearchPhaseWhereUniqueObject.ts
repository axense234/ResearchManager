// Validators
import { IsUUID } from 'class-validator';

export class ResearchPhaseWhereUniqueObject {
  @IsUUID()
  id: string;
}
