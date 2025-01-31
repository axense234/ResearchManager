// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { SettingsIncludeObject } from './SettingsIncludeObject';
import { SettingsSelectObject } from './SettingsSelectObject';
import { SettingsWhereUniqueObject } from './SettingsWhereUniqueObject';

export class SettingsFindUniqueObject {
  @Type(() => SettingsWhereUniqueObject)
  where: SettingsWhereUniqueObject;

  @Type(() => SettingsIncludeObject)
  @IsOptional()
  include?: SettingsIncludeObject;

  @Type(() => SettingsSelectObject)
  @IsOptional()
  select?: SettingsSelectObject;
}
