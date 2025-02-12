// Validators
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetUsersQueryParams {
  @ApiProperty({ required: false, description: 'test' })
  @IsOptional()
  @IsString()
  searchByKey: string;

  @ApiProperty({ required: false, description: 'test' })
  @IsOptional()
  @IsString()
  searchByValue: string;

  @ApiProperty({ required: false, description: 'test' })
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @ApiProperty({ required: false, description: 'test' })
  @IsString()
  @IsOptional()
  sortByOrders: 'asc' | 'desc';

  @ApiProperty({ required: false, description: 'test' })
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty({ required: false, description: 'test' })
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty({ required: false, description: 'test' })
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
