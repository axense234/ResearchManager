// Redux
import { State } from "@/redux/api/store";
// Adapter
import { activityLogsAdapter } from "./adapter";

export const {
  selectAll: selectAllActivityLogs,
  selectById: selectActivityLogById,
  selectIds: selectActivityLogsIds,
  selectTotal: selectNumberOfActivityLogs,
} = activityLogsAdapter.getSelectors<State>((state) => state.activityLogs);
