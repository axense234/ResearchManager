// Redux
import { State } from "@/redux/api/store";
import { createSelector } from "@reduxjs/toolkit";
// Adapter
import { activityDaysAdapter } from "./adapter";

export const {
  selectAll: selectAllActivityDays,
  selectById: selectActivityDayById,
  selectIds: selectActivityDaysIds,
  selectTotal: selectNumberOfActivityDays,
} = activityDaysAdapter.getSelectors<State>((state) => state.activityDays);

export const selectActivityDayIdBasedOnLocaleDate = createSelector(
  [selectAllActivityDays],
  (activityDays) => {
    const lastDateWithActivity = new Date(
      activityDays[activityDays.length - 1]?.createdAt,
    ).toLocaleDateString();

    const currentDate = new Date().toLocaleDateString();

    if (lastDateWithActivity === currentDate) {
      return activityDays[activityDays.length - 1]?.id;
    } else {
      return null;
    }
  },
);

export const selectActivityDaysIdsByActivityFeedId = createSelector(
  [selectAllActivityDays, (state, activityFeedId) => activityFeedId],
  (activityDays, activityFeedId) => {
    return activityDays
      .filter((activityDay) => activityDay.activityFeedId === activityFeedId)
      .map((activityDay) => activityDay.id);
  },
);

export const selectActivityDaysByActivityDaysIds = createSelector(
  [
    selectAllActivityDays,
    (state, activityDaysIds: string[]) => activityDaysIds,
  ],
  (activityDays, activityDaysIds) => {
    return activityDays.filter((activityDay) =>
      activityDaysIds.includes(activityDay.id),
    );
  },
);

export const selectCurrentActivityDayId = (state: State) =>
  state.activityDays.currentActivityDayId;
