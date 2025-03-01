// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { deleteTagQueryParamsApiPropertyOptions } from '../../data';

export class DeleteTagQueryParams {
  @ApiProperty(deleteTagQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(deleteTagQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(deleteTagQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
