// Redux
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
// Thunks
import {
  getProfileJWT,
  getProfileOAuth,
  signInUser,
} from "../../slices/general";
// Types
import { UserPayload } from "@researchmanager/shared/types";
import { AxiosError } from "axios";
// Helper
import { transformEntitiesFromUserPayloadToEntitiesRedux } from "@/helpers";
// Redux
import { setTags } from "@/redux/slices/tag";
import { setResearchActivities } from "@/redux/slices/research/activity";
import { setResearchPhases } from "@/redux/slices/research/phase";
import { setResearchLogs } from "@/redux/slices/research/log";
import { setResearchSessions } from "@/redux/slices/research/session";
import { setActivityFeed } from "@/redux/slices/activity/feed";
import { setActivityDays } from "@/redux/slices/activity/day";
import { setActivityLogs } from "@/redux/slices/activity/log";

export const setEntitiesStateFromUserPayloadListener =
  createListenerMiddleware();

setEntitiesStateFromUserPayloadListener.startListening({
  matcher: isAnyOf(
    getProfileOAuth.fulfilled,
    getProfileJWT.fulfilled,
    signInUser.fulfilled,
  ),
  effect: async (action, listenerApi) => {
    const { dispatch } = listenerApi;

    const axiosError = action.payload as AxiosError;

    if (!axiosError?.isAxiosError) {
      const userPayload = action.payload as UserPayload;
      const {
        tags,
        researchActivities,
        researchLogs,
        researchPhases,
        researchSessions,
        activityFeed,
        activityLogs,
        activityDays,
      } = transformEntitiesFromUserPayloadToEntitiesRedux(userPayload);

      console.log(activityFeed);
      console.log(activityDays);
      console.log(activityLogs);

      tags && dispatch(setTags(tags));
      researchActivities && dispatch(setResearchActivities(researchActivities));
      researchPhases && dispatch(setResearchPhases(researchPhases));
      researchLogs && dispatch(setResearchLogs(researchLogs));
      researchSessions && dispatch(setResearchSessions(researchSessions));
      activityFeed && dispatch(setActivityFeed(activityFeed));
      activityDays && dispatch(setActivityDays(activityDays));
      activityLogs && dispatch(setActivityLogs(activityLogs));
    }
  },
});
