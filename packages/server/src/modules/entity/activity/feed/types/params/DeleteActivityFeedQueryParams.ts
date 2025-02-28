// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { deleteActivityFeedQueryParamsApiPropertyOptions } from '../../data';

export class DeleteActivityFeedQueryParams {
  @ApiProperty(deleteActivityFeedQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(deleteActivityFeedQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    deleteActivityFeedQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
