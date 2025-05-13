// Types
import { EntityState } from "@reduxjs/toolkit";
import { ActivityFeedRedux } from "./ActivityFeedRedux";
import { ActivityFeedsSliceInitialStateType } from "./ActivityFeedsSliceInitialStateType";

export type ActivityFeedsSliceStateType = EntityState<
  ActivityFeedRedux,
  string
> &
  ActivityFeedsSliceInitialStateType;
