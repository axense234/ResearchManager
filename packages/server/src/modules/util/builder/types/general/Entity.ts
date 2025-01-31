// Entity Types
import {
  ResearchActivity,
  ResearchLog,
  ResearchPhase,
  ResearchSession,
  Settings,
} from '@prisma/client';

export type Entity =
  | ResearchActivity
  | ResearchPhase
  | ResearchLog
  | ResearchSession
  | Settings;
