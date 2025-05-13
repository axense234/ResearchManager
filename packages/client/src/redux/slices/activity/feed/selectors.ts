// Redux
import { State } from "@/redux/api/store";
// Adapter
import { activityFeedsAdapter } from "./adapter";

export const {
  selectAll: selectAllActivityFeeds,
  selectById: selectActivityFeedById,
  selectIds: selectActivityFeedsIds,
  selectTotal: selectNumberOfActivityFeeds,
} = activityFeedsAdapter.getSelectors<State>((state) => state.activityFeeds);
