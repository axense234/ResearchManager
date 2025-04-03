// Validators
import {
  IsJWT,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";
// Entity Types
import { EntityPayload } from "./EntityPayload";

export class ReturnObjectBuilderReturnObject {
  @IsNumber()
  @IsOptional()
  nbHits?: number;

  @IsString()
  @IsOptional()
  message?: string | string[];

  @IsString()
  @IsOptional()
  notes?: string | string[];

  @IsObject()
  @IsOptional()
  payload?: EntityPayload | EntityPayload[];

  @IsJWT()
  @IsOptional()
  access_token?: string;

  @IsString()
  @IsOptional()
  error?: string;

  @IsNumber()
  @IsOptional()
  statusCode?: number;
}
