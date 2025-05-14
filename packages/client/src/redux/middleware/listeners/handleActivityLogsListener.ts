// Redux
import { addErrorField, setGeneralModal } from "@/redux/slices/general/slice";
import {
  createResearchActivity,
  deleteResearchActivity,
  updateResearchActivity,
} from "@/redux/slices/research/activity/thunks";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { State } from "@/redux/api/store";
// Helper
import { handleFormErrorInputsAndModalMessage } from "@/helpers";
// Types
import { AxiosError } from "axios";
import { createTag } from "@/redux/slices/tag/thunks";
import {
  createResearchPhase,
  deleteResearchPhase,
  updateResearchPhase,
} from "@/redux/slices/research/phase";
import { selectActivityDayIdBasedOnLocaleDate } from "@/redux/slices/activity/day";
import { createActivityDay } from "@/redux/slices/activity/day/thunks";
import { activityLogsMessages } from "@/data/redux";
import {
  CreateActivityLogDto,
  EntityType,
} from "@researchmanager/shared/types";
import { createActivityLog } from "@/redux/slices/activity/log/thunks";

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

    let methodUsed = "create";
    let entityUsed: EntityType = "researchActivity";

    if (action.type.includes("researchActivities")) {
      entityUsed = "researchActivity";
    } else if (action.type.includes("researchPhases")) {
      entityUsed = "researchPhase";
    } else if (action.type.includes("tags")) {
      entityUsed = "tag";
    }

    if (action.type.includes("create")) {
      methodUsed = "create";
    } else if (action.type.includes("update")) {
      methodUsed = "update";
    } else if (action.type.includes("delete")) {
      methodUsed = "delete";
    }

    if (action.type.endsWith("fulfilled")) {
      const axiosError = action.payload as AxiosError;

      if (!axiosError.isAxiosError) {
        const activityDayIdBasedOnLocaleDate =
          selectActivityDayIdBasedOnLocaleDate(state);

        if (activityDayIdBasedOnLocaleDate === null) {
          const activityLogDto = activityLogsMessages()[entityUsed][
            methodUsed
          ] as CreateActivityLogDto;

          const test = activityLogsMessages();
          console.log(test);

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
          const test = activityLogsMessages(activityDayIdBasedOnLocaleDate);
          console.log(test);

          const activityLogDto = activityLogsMessages(
            activityDayIdBasedOnLocaleDate,
          )[entityUsed][methodUsed] as CreateActivityLogDto;

          dispatch(createActivityLog({ ...activityLogDto }));
        }
      } else {
      }
    } else if (action.type.endsWith("rejected")) {
    }
  },
});
