// Types
import { ResearchActivitiesSliceStateType } from "@/core/types";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// Extra Reducers
import {
  createResearchActivity,
  createResearchActivityFulfilled,
  createResearchActivityPending,
  createResearchActivityRejected,
} from "./createResearchActivity";
import {
  deleteResearchActivity,
  deleteResearchActivityFulfilled,
  deleteResearchActivityPending,
  deleteResearchActivityRejected,
} from "./deleteResearchActivity";
import {
  getUserResearchActivities,
  getUserResearchActivitiesFulfilled,
  getUserResearchActivitiesPending,
  getUserResearchActivitiesRejected,
} from "./getUserResearchActivities";
import {
  getUserResearchActivity,
  getUserResearchActivityFulfilled,
  getUserResearchActivityPending,
  getUserResearchActivityRejected,
} from "./getUserResearchActivity";
import {
  updateResearchActivity,
  updateResearchActivityFulfilled,
  updateResearchActivityPending,
  updateResearchActivityRejected,
} from "./updateResearchActivity";

export const researchActivitiesSliceExtraReducers: (
  builder: ActionReducerMapBuilder<ResearchActivitiesSliceStateType>,
) => void = (builder) => {
  builder
    .addCase(createResearchActivity.pending, createResearchActivityPending)
    .addCase(createResearchActivity.fulfilled, createResearchActivityFulfilled)
    .addCase(createResearchActivity.rejected, createResearchActivityRejected)
    .addCase(deleteResearchActivity.pending, deleteResearchActivityPending)
    .addCase(deleteResearchActivity.fulfilled, deleteResearchActivityFulfilled)
    .addCase(deleteResearchActivity.rejected, deleteResearchActivityRejected)
    .addCase(
      getUserResearchActivities.pending,
      getUserResearchActivitiesPending,
    )
    .addCase(
      getUserResearchActivities.fulfilled,
      getUserResearchActivitiesFulfilled,
    )
    .addCase(
      getUserResearchActivities.rejected,
      getUserResearchActivitiesRejected,
    )
    .addCase(getUserResearchActivity.pending, getUserResearchActivityPending)
    .addCase(
      getUserResearchActivity.fulfilled,
      getUserResearchActivityFulfilled,
    )
    .addCase(getUserResearchActivity.rejected, getUserResearchActivityRejected)
    .addCase(updateResearchActivity.pending, updateResearchActivityPending)
    .addCase(updateResearchActivity.fulfilled, updateResearchActivityFulfilled)
    .addCase(updateResearchActivity.rejected, updateResearchActivityRejected);
};
