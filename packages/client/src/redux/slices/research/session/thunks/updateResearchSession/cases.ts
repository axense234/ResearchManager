// Types
import {
  ExtraReducerFuncType,
  ResearchSessionRedux,
  ResearchSessionsSliceStateType,
} from "@/core/types";
import { AxiosError } from "axios";
import { ResearchSession } from "@prisma/client";
// Adapter
import { researchSessionsAdapter } from "../../adapter";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const updateResearchSessionPending: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingUpdateResearchSession = "PENDING";
};

export const updateResearchSessionFulfilled: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  const researchSession = action.payload as ResearchSession;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const researchSessionRedux = transformEntityIntoEntityRedux(
      researchSession,
      "researchSession",
    ) as ResearchSessionRedux;

    researchSessionsAdapter.updateOne(state, {
      changes: { ...researchSessionRedux },
      id: researchSessionRedux.id,
    });
    state.loadingUpdateResearchSession = "SUCCEEDED";
  } else {
    state.loadingUpdateResearchSession = "REJECTED";
  }
};

export const updateResearchSessionRejected: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingUpdateResearchSession = "REJECTED";
};
