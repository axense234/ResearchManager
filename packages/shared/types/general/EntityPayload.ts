// Payload Types
import {
  ActivityDayPayload,
  ActivityFeedPayload,
  ActivityLogPayload,
  ResearchActivityPayload,
  ResearchLogPayload,
  ResearchPhasePayload,
  ResearchSessionPayload,
  SettingsPayload,
  TagPayload,
  UserPayload,
} from "./payload";

export type EntityPayload =
  | UserPayload
  | SettingsPayload
  | ActivityFeedPayload
  | ActivityDayPayload
  | ActivityLogPayload
  | ResearchActivityPayload
  | ResearchPhasePayload
  | ResearchLogPayload
  | ResearchSessionPayload
  | TagPayload;
