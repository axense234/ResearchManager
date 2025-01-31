// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { SettingsCreateDataObject } from './SettingsCreateDataObject';
import { SettingsSelectObject } from './SettingsSelectObject';
import { SettingsIncludeObject } from './SettingsIncludeObject';

export class SettingsCreateObject {
  @Type(() => SettingsCreateDataObject)
  data: SettingsCreateDataObject;

  @Type(() => SettingsIncludeObject)
  @IsOptional()
  include?: SettingsIncludeObject;

  @Type(() => SettingsSelectObject)
  @IsOptional()
  select?: SettingsSelectObject;
}
