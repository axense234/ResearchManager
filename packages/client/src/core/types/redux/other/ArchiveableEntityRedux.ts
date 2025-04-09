// Types
import {
  TagRedux,
  ResearchActivityRedux,
  ResearchPhaseRedux,
  ResearchLogRedux,
} from "../entity";

export type ArchiveableEntityRedux =
  | TagRedux
  | ResearchActivityRedux
  | ResearchPhaseRedux
  | ResearchLogRedux;
