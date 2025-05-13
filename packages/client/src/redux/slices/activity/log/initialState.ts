// Types
import {
  ActivityLogsSliceInitialStateType,
  ActivityLOgsSliceStateType,
} from "@/core/types";
// Adapter
import { activityLogsAdapter } from "./adapter";

export const activityLogsSliceInitialState =
  {} as ActivityLogsSliceInitialStateType;

export const activityLogsSliceState = activityLogsAdapter.getInitialState(
  activityLogsSliceInitialState,
) as ActivityLOgsSliceStateType;
