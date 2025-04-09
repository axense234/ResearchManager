// Redux
import { State } from "@/redux/api/store";
import { createSelector } from "@reduxjs/toolkit";
// Adapter
import { researchActivitiesAdapter } from "./adapter";

export const {
  selectAll: selectAllResearchActivities,
  selectById: selectResearchActivityById,
  selectIds: selectResearchActivitiesIds,
} = researchActivitiesAdapter.getSelectors<State>(
  (state) => state.researchActivities,
);

// Examples
export const selectResearchActivitiesExamples = (state: State) =>
  state.researchActivities.researchActivitiesExamples;

export const selectResearchActivityExampleById = createSelector(
  [selectResearchActivitiesExamples, (state, activityId) => activityId],
  (researchActivities, researchActivityId) =>
    researchActivities.find(
      (researchActivity) => researchActivity.id === researchActivityId,
    ),
);

export const selectResearchActivitiesExamplesByIds = createSelector(
  [selectResearchActivitiesExamples, (state, ids) => ids],
  (researchActivities, ids) =>
    researchActivities.filter((researchActivity) =>
      ids.includes(researchActivity.id),
    ),
);

// General
export const selectCurrentResearchActivityExampleIndex = (state: State) =>
  state.researchActivities.currentResearchActivityExampleIndex;

export const selectCurrentResearchActivityIndex = (state: State) =>
  state.researchActivities.currentResearchActivityIndex;

export const selectCreateResearchActivityDto = (state: State) =>
  state.researchActivities.createResearchActivityDto;

export const selectLoadingGetUserResearchActivities = (state: State) =>
  state.researchActivities.loadingGetUserResearchActivities;

export const selectLoadingGetUserResearchActivity = (state: State) =>
  state.researchActivities.loadingGetUserResearchActivity;

export const selectLoadingCreateResearchActivity = (state: State) =>
  state.researchActivities.loadingCreateResearchActivity;

export const selectLoadingUpdateResearchActivity = (state: State) =>
  state.researchActivities.loadingUpdateResearchActivity;

export const selectLoadingDeleteResearchActivity = (state: State) =>
  state.researchActivities.loadingDeleteResearchActivity;
