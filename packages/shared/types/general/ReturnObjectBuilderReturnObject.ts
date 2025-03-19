// Validators
import {
  IsJWT,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";

// Entity Types
import {
  ActivityDay,
  ActivityFeed,
  ActivityLog,
  ResearchActivity,
  ResearchLog,
  ResearchPhase,
  ResearchSession,
  Settings,
  Tag,
  User,
} from "@prisma/client";

export type Entity =
  | ResearchActivity
  | ResearchPhase
  | ResearchLog
  | ResearchSession
  | Settings
  | ActivityFeed
  | ActivityDay
  | ActivityLog
  | Tag
  | User;

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
  payload?: Entity | Entity[];

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
