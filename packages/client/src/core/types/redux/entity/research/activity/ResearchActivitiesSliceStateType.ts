// Types
import { EntityState } from "@reduxjs/toolkit";
import { ResearchActivityRedux } from "./ResearchActivityRedux";
import { ResearchActivitiesSliceInitialStateType } from "./ResearchActivitiesSliceInitialStateType";

export type ResearchActivitiesSliceStateType = EntityState<
  ResearchActivityRedux,
  string
> &
  ResearchActivitiesSliceInitialStateType;
