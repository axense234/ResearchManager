// Redux
import {
  createResearchActivity,
  deleteResearchActivity,
  updateResearchActivity,
} from "@/redux/slices/research/activity/thunks";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { State } from "@/redux/api/store";
// Data
import { activityLogsMessages } from "@/data/redux";
// Redux
import { AxiosError } from "axios";
import { selectActivityDayIdBasedOnLocaleDate } from "@/redux/slices/activity/day";
import { createActivityDay } from "@/redux/slices/activity/day/thunks";
import { createActivityLog } from "@/redux/slices/activity/log/thunks";
// Types
import {
  CreateActivityLogDto,
  EntityType,
  ResearchActivityPayload,
  ResearchPhasePayload,
  TagPayload,
} from "@researchmanager/shared/types";

export const handleActivityLogsListener = createListenerMiddleware();

handleActivityLogsListener.startListening({
  matcher: isAnyOf(
    // Research Activity
    createResearchActivity.fulfilled,
    createResearchActivity.rejected,
    updateResearchActivity.fulfilled,
    updateResearchActivity.rejected,
    deleteResearchActivity.fulfilled,
    deleteResearchActivity.rejected,
  ),
  effect: async (action, listenerApi) => {
    const { dispatch, getState } = listenerApi;

    const state = getState() as State;

    const activityLogSubject = state.general.currentActivityLogSubject;
    let entityUsed: EntityType = "researchActivity";
    let entityName = "Unknown";

    if (action.type.includes("researchActivities")) {
      entityUsed = "researchActivity";
      entityName = (action.payload as ResearchActivityPayload)?.name;
    } else if (action.type.includes("researchPhases")) {
      entityUsed = "researchPhase";
      entityName = (action.payload as ResearchPhasePayload)?.name;
    } else if (action.type.includes("tags")) {
      entityUsed = "tag";
      entityName = (action.payload as TagPayload)?.title;
    }

    if (action.type.endsWith("fulfilled")) {
      const axiosError = action.payload as AxiosError;

      if (!axiosError.isAxiosError) {
        const activityDayIdBasedOnLocaleDate =
          selectActivityDayIdBasedOnLocaleDate(state);

        if (activityDayIdBasedOnLocaleDate === null) {
          const activityLogDto = activityLogsMessages(entityName)[entityUsed][
            activityLogSubject
          ] as CreateActivityLogDto;

          delete activityLogDto.activityDays;

          dispatch(
            createActivityDay({
              createActivityLogDto: { ...activityLogDto },
              dto: {
                activityFeedId: state.general.userProfile.activityFeedId,
              },
            }),
          );
        } else {
          const activityLogDto = activityLogsMessages(
            entityName,
            activityDayIdBasedOnLocaleDate,
          )[entityUsed][activityLogSubject] as CreateActivityLogDto;

          dispatch(createActivityLog({ ...activityLogDto }));
        }
      } else {
      }
    } else if (action.type.endsWith("rejected")) {
    }
  },
});
