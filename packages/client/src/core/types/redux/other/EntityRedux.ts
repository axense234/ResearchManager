// Types
import {
  ActivityDayRedux,
  ActivityFeedRedux,
  ActivityLogRedux,
  ResearchActivityRedux,
  ResearchLogRedux,
  ResearchPhaseRedux,
  ResearchSessionRedux,
  TagRedux,
  UserRedux,
} from "../entity";

export type EntityRedux =
  | UserRedux
  | TagRedux
  | ResearchActivityRedux
  | ResearchPhaseRedux
  | ResearchLogRedux
  | ResearchSessionRedux
  | ActivityFeedRedux
  | ActivityDayRedux
  | ActivityLogRedux;
