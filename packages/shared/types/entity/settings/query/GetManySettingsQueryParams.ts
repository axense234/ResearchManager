// Validators
import { IsOptional, IsString } from "class-validator";

export class GetManySettingsQueryParams {
  @IsOptional()
  @IsString()
  userId: string;

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
  sortByOrders: string;

  @IsString()
  @IsOptional()
  includeValues: string;

  @IsString()
  @IsOptional()
  selectValues: string;

  @IsString()
  @IsOptional()
  chosenOptionType: "include" | "select";
}
