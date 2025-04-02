// Types
import { EntityState } from "@reduxjs/toolkit";
import { ResearchLogRedux } from "./ResearchLogRedux";
import { ResearchLogsSliceInitialStateType } from "./ResearchLogsSliceInitialStateType";

export type ResearchLogsSliceStateType = EntityState<ResearchLogRedux, string> &
  ResearchLogsSliceInitialStateType;
