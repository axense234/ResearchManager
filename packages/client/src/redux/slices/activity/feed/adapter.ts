// Types
import { ActivityFeedRedux } from "@/core/types";
// Redux
import { createEntityAdapter } from "@reduxjs/toolkit";

export const activityFeedsAdapter = createEntityAdapter<ActivityFeedRedux>();
