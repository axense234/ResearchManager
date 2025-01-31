// Validators
import { IsBoolean, IsOptional } from 'class-validator';

export class SettingsIncludeObject {
  @IsBoolean()
  @IsOptional()
  user?: boolean;
}
