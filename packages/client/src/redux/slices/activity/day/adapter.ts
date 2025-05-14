// Types
import { ActivityDayRedux } from "@/core/types";
// Redux
import { createEntityAdapter } from "@reduxjs/toolkit";

export const activityDaysAdapter = createEntityAdapter<ActivityDayRedux>({
  sortComparer: (a, b) =>
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
});
