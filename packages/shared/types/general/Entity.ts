// Types
import {
  ResearchActivity,
  ResearchPhase,
  ResearchLog,
  ResearchSession,
  Settings,
  ActivityFeed,
  ActivityDay,
  ActivityLog,
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
