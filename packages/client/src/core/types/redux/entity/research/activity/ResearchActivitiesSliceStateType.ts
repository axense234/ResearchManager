// Types
import { EntityState } from "@reduxjs/toolkit";
import { ResearchActivityRedux } from "./ResearchActivityRedux";
import { ResearchActivitiesInitialStateType } from "./ResearchActivitiesSliceInitialStateType";

export type ResearchActivitiesSliceStateType = EntityState<
  ResearchActivityRedux,
  string
> &
  ResearchActivitiesInitialStateType;
