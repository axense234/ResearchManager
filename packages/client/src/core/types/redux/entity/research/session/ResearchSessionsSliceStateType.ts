// Types
import { EntityState } from "@reduxjs/toolkit";
import { ResearchSessionRedux } from "./ResearchSessionRedux";
import { ResearchSessionsSliceInitialStateType } from "./ResearchSessionsSliceInitialStateType";

export type ResearchSessionsSliceStateType = EntityState<
  ResearchSessionRedux,
  string
> &
  ResearchSessionsSliceInitialStateType;
