// Entity Types
import {
  ResearchActivity,
  ResearchLog,
  ResearchPhase,
  ResearchSession,
} from '@prisma/client';

export type Entity =
  | ResearchActivity
  | ResearchPhase
  | ResearchLog
  | ResearchSession;
