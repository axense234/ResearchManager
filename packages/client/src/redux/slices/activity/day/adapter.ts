// Types
import { ActivityDayRedux } from "@/core/types";
// Redux
import { createEntityAdapter } from "@reduxjs/toolkit";

export const activityDaysAdapter = createEntityAdapter<ActivityDayRedux>();
