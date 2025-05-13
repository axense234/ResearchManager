// Types
import { ActivityLogRedux } from "@/core/types";
// Redux
import { createEntityAdapter } from "@reduxjs/toolkit";

export const activityLogsAdapter = createEntityAdapter<ActivityLogRedux>();
