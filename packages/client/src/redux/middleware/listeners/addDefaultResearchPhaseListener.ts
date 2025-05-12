// Types
import { ResearchActivityPayload } from "@researchmanager/shared/types";
import { AxiosError } from "axios";
import { ResearchPhaseRedux } from "@/core/types";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";
// Redux
import { State } from "@/redux/api/store";
import { createResearchActivity } from "@/redux/slices/research/activity/thunks";
import { addResearchPhase } from "@/redux/slices/research/phase";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

export const addDefaultResearchPhaseListener = createListenerMiddleware();

addDefaultResearchPhaseListener.startListening({
  matcher: isAnyOf(
    // Research Activity
    createResearchActivity.fulfilled,
  ),
  effect: async (action, listenerApi) => {
    const { dispatch, getState } = listenerApi;

    const state = getState() as State;
    const axiosError = action.payload as AxiosError;

    if (!axiosError.isAxiosError) {
      const researchActivity = action.payload as ResearchActivityPayload;

      if (
        state.researchActivities.createDefaultResearchPhase &&
        researchActivity.researchPhases[0]
      ) {
        const researchPhaseRedux = transformEntityIntoEntityRedux(
          researchActivity.researchPhases[0],
          "researchPhase",
        ) as ResearchPhaseRedux;
        dispatch(addResearchPhase(researchPhaseRedux));
      }
    }
  },
});
