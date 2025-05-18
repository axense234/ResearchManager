// Types
import { ResearchSessionPayload } from "@researchmanager/shared/types";
import { AxiosError } from "axios";
// Redux
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { updateResearchSession } from "@/redux/slices/research/session";
import { createResearchLog } from "@/redux/slices/research/log";

export const createResearchLogOnResearchSessionFinishListener =
  createListenerMiddleware();

createResearchLogOnResearchSessionFinishListener.startListening({
  matcher: isAnyOf(updateResearchSession.fulfilled),
  effect: async (action, listenerApi) => {
    const { dispatch } = listenerApi;

    const axiosError = action.payload as AxiosError;

    if (!axiosError.isAxiosError) {
      const researchSession = action.payload as ResearchSessionPayload;

      if (researchSession.currentStatusType === "FINISHED") {
        dispatch(
          createResearchLog({
            ...researchSession,
            tags: researchSession.tags.map((tag) => tag.id),
          }),
        )
          .unwrap()
          .then((res) => console.log(res));
      }
    }
  },
});
