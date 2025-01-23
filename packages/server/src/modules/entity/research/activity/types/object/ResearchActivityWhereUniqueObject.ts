import { IsUUID } from 'class-validator';

export class ResearchActivityWhereUniqueCustomObject {
  @IsUUID()
  id: string;
}
