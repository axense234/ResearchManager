// Types
import { AxiosError } from "axios";
import { ActivityDayPayload } from "@researchmanager/shared/types";
import { ActivityLogRedux } from "@/core/types";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";
// Redux
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { createActivityDay } from "@/redux/slices/activity/day/thunks";
import { addActivityLog } from "@/redux/slices/activity/log";

export const addActivityLogWhenCreatingActivityDayListener =
  createListenerMiddleware();

addActivityLogWhenCreatingActivityDayListener.startListening({
  matcher: isAnyOf(createActivityDay.fulfilled),
  effect: async (action, listenerApi) => {
    const { dispatch } = listenerApi;

    const axiosError = action.payload as AxiosError;

    if (!axiosError.isAxiosError) {
      const activityDay = action.payload as ActivityDayPayload;

      console.log(activityDay);

      if (activityDay.activityLogs[0]) {
        const activityLogRedux = transformEntityIntoEntityRedux(
          activityDay.activityLogs[0],
          "activityLog",
        ) as ActivityLogRedux;

        dispatch(addActivityLog(activityLogRedux));
      }
    }
  },
});
