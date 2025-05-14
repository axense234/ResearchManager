// Redux
import { State } from "@/redux/api/store";
import { createSelector } from "@reduxjs/toolkit";
// Adapter
import { activityLogsAdapter } from "./adapter";

export const {
  selectAll: selectAllActivityLogs,
  selectById: selectActivityLogById,
  selectIds: selectActivityLogsIds,
  selectTotal: selectNumberOfActivityLogs,
} = activityLogsAdapter.getSelectors<State>((state) => state.activityLogs);

export const selectActivityLogsIdsByActivityDayId = createSelector(
  [selectAllActivityLogs, (state, activityDayId) => activityDayId],
  (activityLogs, activityDayId) => {
    console.log(activityLogs);
    return activityLogs
      .filter((activityLog) =>
        activityLog.activityDaysIds?.includes(activityDayId),
      )
      .map((activityLog) => activityLog.id);
  },
);
