// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import {
  ResearchLogIncludeObject,
  ResearchLogSelectObject,
  ResearchLogUpdateDataObject,
  ResearchLogWhereUniqueObject,
} from '../../../log/types';

export class ResearchLogUpdateObject {
  @Type(() => ResearchLogWhereUniqueObject)
  where: ResearchLogWhereUniqueObject;

  @Type(() => ResearchLogUpdateDataObject)
  data: ResearchLogUpdateDataObject;

  @Type(() => ResearchLogIncludeObject)
  @IsOptional()
  include?: ResearchLogIncludeObject;

  @Type(() => ResearchLogSelectObject)
  @IsOptional()
  select?: ResearchLogSelectObject;
}
