// Types
import {
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
  | ResearchSessionRedux;
