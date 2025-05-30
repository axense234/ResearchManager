// Types
import {
  ActivityDaysSliceInitialStateType,
  ActivityDaysSliceStateType,
} from "@/core/types";
import { activityDaysAdapter } from "./adapter";

export const activityDaysSliceInitialState = {
  currentActivityDayId: "",
} as ActivityDaysSliceInitialStateType;

export const activityDaysSliceState = activityDaysAdapter.getInitialState(
  activityDaysSliceInitialState,
) as ActivityDaysSliceStateType;
