// Data
import { activityLogsMessages } from "@/data/redux";
// Types
import {
  CreateActivityLogDto,
  ResearchActivityPayload,
  ResearchLogPayload,
  ResearchPhasePayload,
  ResearchSessionPayload,
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
import {
  createResearchLog,
  deleteResearchLog,
  updateResearchLog,
} from "@/redux/slices/research/log";

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
    createTag.fulfilled,
    createTag.rejected,
    // Research Session
    createResearchSession.fulfilled,
    createResearchSession.rejected,
    updateResearchSession.fulfilled,
    updateResearchSession.rejected,
    deleteResearchSession.fulfilled,
    deleteResearchSession.rejected,
    // Research Log
    createResearchLog.fulfilled,
    createResearchLog.rejected,
    updateResearchLog.fulfilled,
    updateResearchLog.rejected,
    deleteResearchLog.fulfilled,
    deleteResearchLog.rejected,
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
    } else if (action.type.includes("researchSessions")) {
      entityLabel = "Research Session";
      entityName = (action.payload as ResearchSessionPayload)?.name;
    } else if (action.type.includes("researchLogs")) {
      entityLabel = "Research Log";
      entityName = (action.payload as ResearchLogPayload)?.name;
    }

    if (action.type.endsWith("fulfilled")) {
      const axiosError = action.payload as AxiosError;

      if (!axiosError.isAxiosError) {
        const activityDayIdBasedOnLocaleDate =
          selectActivityDayIdBasedOnLocaleDate(state);

        if (activityDayIdBasedOnLocaleDate === null) {
          const activityLogDto = activityLogsMessages(
            entityName,
            new Date().toLocaleTimeString(),
            entityLabel,
          )[activityLogSubject] as CreateActivityLogDto;

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
            new Date().toLocaleTimeString(),
            activityDayIdBasedOnLocaleDate,
          )[activityLogSubject] as CreateActivityLogDto;

          dispatch(createActivityLog({ ...activityLogDto }));
        }
      } else {
        // same as rejected
      }
    } else if (action.type.endsWith("rejected")) {
      // same as the above
    }
  },
});
