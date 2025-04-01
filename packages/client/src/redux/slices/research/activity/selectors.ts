// Redux
import { State } from "@/redux/api/store";
// Adapater
import { researchActivitiesAdapter } from "./adapter";

export const {
  selectAll: selectAllResearchActivities,
  selectById: selectResearchActivityById,
  selectIds: selectResearchActivitiesIds,
} = researchActivitiesAdapter.getSelectors<State>(
  (state) => state.researchActivities,
);

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
