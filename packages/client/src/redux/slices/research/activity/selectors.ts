// Redux
import { State } from "@/redux/api/store";
// Adapter
import { researchActivitiesAdapter } from "./adapter";

export const {
  selectAll: selectAllResearchActivities,
  selectById: selectResearchActivityById,
  selectIds: selectResearchActivitiesIds,
} = researchActivitiesAdapter.getSelectors<State>(
  (state) => state.researchActivities,
);

export const selectCurrentResearchActivityExampleIndex = (state: State) =>
  state.researchActivities.currentResearchActivityExampleIndex;

export const selectCurrentResearchActivityIndex = (state: State) =>
  state.researchActivities.currentResearchActivityIndex;

export const selectResearchActivitiesExamples = (state: State) =>
  state.researchActivities.researchActivitiesExamples;

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
