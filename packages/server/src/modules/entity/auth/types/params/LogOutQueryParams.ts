// Validators
import { IsEmail, IsUUID } from 'class-validator';

export class LogOutQueryParams {
  @IsUUID()
  userId: string;

  @IsEmail()
  email: string;
}
