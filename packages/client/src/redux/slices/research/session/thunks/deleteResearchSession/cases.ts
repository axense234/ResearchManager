// Types
import {
  ExtraReducerFuncType,
  ResearchSessionsSliceStateType,
} from "@/core/types";
import { AxiosError } from "axios";
import { ResearchSession } from "@prisma/client";
// Adapter
import { researchSessionsAdapter } from "../../adapter";

export const deleteResearchSessionPending: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingDeleteResearchSession = "PENDING";
};

export const deleteResearchSessionFulfilled: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  const researchSession = action.payload as ResearchSession;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    researchSessionsAdapter.removeOne(state, researchSession.id);
    state.loadingDeleteResearchSession = "REJECTED";
  } else {
    state.loadingDeleteResearchSession = "FAILED";
  }
};

export const deleteResearchSessionRejected: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingDeleteResearchSession = "FAILED";
};
