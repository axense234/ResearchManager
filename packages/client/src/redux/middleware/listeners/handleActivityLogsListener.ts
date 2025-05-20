// Data
import { activityLogsMessages } from "@/data/redux";
// Types
import {
  CreateActivityLogDto,
  ResearchActivityPayload,
  ResearchPhasePayload,
  TagPayload,
} from "@researchmanager/shared/types";
import { AxiosError } from "axios";
// Redux
import {
  createResearchActivity,
  deleteResearchActivity,
  updateResearchActivity,
} from "@/redux/slices/research/activity/thunks";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { State } from "@/redux/api/store";
import { selectActivityDayIdBasedOnLocaleDate } from "@/redux/slices/activity/day";
import { createActivityDay } from "@/redux/slices/activity/day/thunks";
import { createActivityLog } from "@/redux/slices/activity/log/thunks";
import { createTag } from "@/redux/slices/tag/thunks";
import {
  createResearchPhase,
  deleteResearchPhase,
  updateResearchPhase,
} from "@/redux/slices/research/phase";
import {
  createResearchSession,
  deleteResearchSession,
  updateResearchSession,
} from "@/redux/slices/research/session";

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
    // Research Phase
    createResearchPhase.fulfilled,
    createResearchPhase.rejected,
    updateResearchPhase.fulfilled,
    updateResearchPhase.rejected,
    deleteResearchPhase.fulfilled,
    deleteResearchPhase.rejected,
    // Tag
    createTag.pending,
    createTag.fulfilled,
    createTag.rejected,
    // Research Session
    updateResearchSession.pending,
    updateResearchSession.fulfilled,
    updateResearchSession.rejected,
    deleteResearchSession.pending,
    deleteResearchSession.fulfilled,
    deleteResearchSession.rejected,
  ),
  effect: async (action, listenerApi) => {
    const { dispatch, getState } = listenerApi;

    const state = getState() as State;

    const activityLogSubject = state.general.currentActivityLogSubject;

    let entityLabel = "Research Activity";
    let entityName = "Unknown";

    if (action.type.includes("researchActivities")) {
      entityLabel = "Research Activity";
      entityName = (action.payload as ResearchActivityPayload)?.name;
    } else if (action.type.includes("researchPhases")) {
      entityLabel = "Research Phase";
      entityName = (action.payload as ResearchPhasePayload)?.name;
    } else if (action.type.includes("tags")) {
      entityLabel = "Tag";
      entityName = (action.payload as TagPayload)?.title;
    }

    if (action.type.endsWith("fulfilled")) {
      const axiosError = action.payload as AxiosError;

      if (!axiosError.isAxiosError) {
        const activityDayIdBasedOnLocaleDate =
          selectActivityDayIdBasedOnLocaleDate(state);

        if (activityDayIdBasedOnLocaleDate === null) {
          const activityLogDto = activityLogsMessages(entityName, entityLabel)[
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
            entityLabel,
            activityDayIdBasedOnLocaleDate,
          )[activityLogSubject] as CreateActivityLogDto;

          dispatch(createActivityLog({ ...activityLogDto }));
        }
      } else {
      }
    } else if (action.type.endsWith("rejected")) {
    }
  },
});
