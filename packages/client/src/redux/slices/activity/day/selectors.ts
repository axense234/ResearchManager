// Redux
import { State } from "@/redux/api/store";
// Adapter
import { activityDaysAdapter } from "./adapter";

export const {
  selectAll: selectAllActivityDays,
  selectById: selectActivityDayById,
  selectIds: selectActivityDaysIds,
  selectTotal: selectNumberOfActivityDays,
} = activityDaysAdapter.getSelectors<State>((state) => state.activityDays);
