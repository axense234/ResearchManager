// Validators
import { IsObject, IsOptional } from 'class-validator';

export class ActivityLogQueryObject {
  @IsOptional()
  @IsObject()
  searchByKey?: { contains: string };
}
