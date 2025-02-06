// Validators
import { IsEmail, IsOptional, IsUUID } from 'class-validator';

export class UserWhereUniqueObject {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsEmail()
  @IsOptional()
  email: string;
}
