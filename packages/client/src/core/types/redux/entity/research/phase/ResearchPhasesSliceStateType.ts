// Types
import { EntityState } from "@reduxjs/toolkit";
import { ResearchPhaseRedux } from "./ResearchPhaseRedux";
import { ResearchPhasesSliceInitialStateType } from "./ResearchPhasesSliceInitialStateType";

export type ResearchPhasesSliceStateType = EntityState<
  ResearchPhaseRedux,
  string
> &
  ResearchPhasesSliceInitialStateType;
