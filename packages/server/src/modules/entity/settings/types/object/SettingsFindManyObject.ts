// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { SettingsIncludeObject } from './SettingsIncludeObject';
import { SettingsSelectObject } from './SettingsSelectObject';
import { SettingsWhereObject } from './SettingsWhereObject';
import { SettingsOrderByObject } from './SettingsOrderByObject';

export class SettingsFindManyObject {
  @Type(() => SettingsWhereObject)
  @IsOptional()
  where?: SettingsWhereObject;

  @Type(() => SettingsIncludeObject)
  @IsOptional()
  include?: SettingsIncludeObject;

  @Type(() => SettingsSelectObject)
  @IsOptional()
  select?: SettingsSelectObject;

  @ValidateNested()
  @Type(() => SettingsOrderByObject)
  @IsOptional()
  orderBy?: SettingsOrderByObject[];
}
