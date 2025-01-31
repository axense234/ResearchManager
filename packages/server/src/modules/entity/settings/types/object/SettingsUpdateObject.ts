// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { SettingsIncludeObject } from './SettingsIncludeObject';
import { SettingsSelectObject } from './SettingsSelectObject';
import { SettingsUpdateDataObject } from './SettingsUpdateDataObject';
import { SettingsWhereUniqueObject } from './SettingsWhereUniqueObject';

export class SettingsUpdateObject {
  @Type(() => SettingsWhereUniqueObject)
  where: SettingsWhereUniqueObject;

  @Type(() => SettingsUpdateDataObject)
  data: SettingsUpdateDataObject;

  @Type(() => SettingsIncludeObject)
  @IsOptional()
  include?: SettingsIncludeObject;

  @Type(() => SettingsSelectObject)
  @IsOptional()
  select?: SettingsSelectObject;
}
