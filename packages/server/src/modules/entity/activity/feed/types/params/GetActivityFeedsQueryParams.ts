// Validators
import { IsString, IsOptional } from 'class-validator';

export class GetActivityFeedsQueryParams {
  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  researchActivityId: string;

  @IsOptional()
  @IsString()
  searchByKey: string;

  @IsOptional()
  @IsString()
  searchByValue: string;

  @IsOptional()
  @IsString()
  sortByKeys: string;

  @IsString()
  @IsOptional()
  sortByOrders: 'asc' | 'desc';

  @IsString()
  @IsOptional()
  includeValues: string;

  @IsString()
  @IsOptional()
  selectValues: string;

  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
