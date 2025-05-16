// Redux
import { State } from "@/redux/api/store";
import { createSelector } from "@reduxjs/toolkit";
// Adapter
import { researchActivitiesAdapter } from "./adapter";
import { calculateResearchActivityRP } from "@/helpers/calculateResearchActivityRP";

export const {
  selectAll: selectAllResearchActivities,
  selectById: selectResearchActivityById,
  selectIds: selectResearchActivitiesIds,
  selectTotal: selectNumberOfResearchActivities,
} = researchActivitiesAdapter.getSelectors<State>(
  (state) => state.researchActivities,
);

export const selectStatisticResearchActivity = createSelector(
  [
    selectAllResearchActivities,
    (state: State) => state,
    (_: State, type: "most" | "least") => type,
  ],
  (researchActivities, state, type) => {
    if (researchActivities.length === 0) {
      return null;
    }

    if (researchActivities.length === 1) {
      const researchActivityRP =
        calculateResearchActivityRP(state, researchActivities[0]) || 0;

      return { researchActivity: researchActivities[0], researchActivityRP };
    }

    let statisticResearchActivity = researchActivities[0];
    let statisticRP = calculateResearchActivityRP(state, researchActivities[0]);

    researchActivities.forEach((researchActivity) => {
      const researchActivityRP = calculateResearchActivityRP(
        state,
        researchActivity,
      );

      if (type === "most" && researchActivityRP > statisticRP) {
        statisticResearchActivity = researchActivity;
        statisticRP = researchActivityRP;
      } else if (type === "least" && researchActivityRP < statisticRP) {
        statisticResearchActivity = researchActivity;
        statisticRP = researchActivityRP;
      }
    });

    return {
      researchActivity: statisticResearchActivity,
      researchActivityRP: statisticRP || 0,
    };
  },
);

export const selectResearchActivitiesCustom = createSelector(
  [
    selectAllResearchActivities,
    (state: State) => state,
    (_: State, options: { sorted: boolean; unarchived: boolean }) => options,
  ],
  (researchActivities, state, options) => {
    let researchActivitiesToReturn = researchActivities;

    if (options.unarchived) {
      researchActivitiesToReturn.filter(
        (researchActivity) => !researchActivity.archived,
      );
    }

    if (options.sorted) {
      researchActivitiesToReturn.sort((first, second) => {
        const firstRP = calculateResearchActivityRP(state, first);
        const secondRP = calculateResearchActivityRP(state, second);
        return secondRP - firstRP;
      });
    }

    return researchActivitiesToReturn;
  },
);

export const selectNumberOfResearchActivitiesCustom = createSelector(
  [selectResearchActivitiesCustom],
  (researchActivities) => {
    return researchActivities.length;
  },
);

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

export const selectResearchActivityIdByIndex = createSelector(
  [selectResearchActivitiesIds, (state, index) => index],
  (researchActivitiesIds, index) => {
    return researchActivitiesIds[index - 1];
  },
);

export const selectResearchActivityExampleIdByIndex = createSelector(
  [selectResearchActivitiesExamples, (state, index) => index],
  (researchActivities, index) => researchActivities[index - 1].id,
);

export const selectCurrentResearchActivityExampleIndex = (state: State) =>
  state.researchActivities.currentResearchActivityExampleIndex;

export const selectCurrentResearchActivityIndex = (state: State) =>
  state.researchActivities.currentResearchActivityIndex;

export const selectCreateResearchActivityDto = (state: State) =>
  state.researchActivities.createResearchActivityDto;

export const selectUpdateResearchActivityDto = (state: State) =>
  state.researchActivities.updateResearchActivityDto;

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

export const selectCreateDefaultResearchPhase = (state: State) =>
  state.researchActivities.createDefaultResearchPhase;
