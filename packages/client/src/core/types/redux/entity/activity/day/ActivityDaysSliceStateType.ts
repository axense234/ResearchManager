// Types
import { EntityState } from "@reduxjs/toolkit";
import { ActivityDayRedux } from "./ActivityDayRedux";
import { ActivityDaysSliceInitialStateType } from "./ActivityDaysSliceInitialStateType";

export type ActivityDaysSliceStateType = EntityState<ActivityDayRedux, string> &
  ActivityDaysSliceInitialStateType;
