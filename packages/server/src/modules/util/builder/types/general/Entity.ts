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
} from '@prisma/client';

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
