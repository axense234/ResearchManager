// Types
import { EntityState } from "@reduxjs/toolkit";
import { ActivityLogRedux } from "./ActivityLogRedux";
import { ActivityLogsSliceInitialStateType } from "./ActivityLogsSliceInitialStateType";

export type ActivityLOgsSliceStateType = EntityState<ActivityLogRedux, string> &
  ActivityLogsSliceInitialStateType;
