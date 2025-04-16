// Types
import { ExtraReducerFuncType, ResearchLogsSliceStateType } from "@/core/types";
import { AxiosError } from "axios";
import { ResearchLog } from "@prisma/client";
// Adapter
import { researchLogsAdapter } from "../../adapter";

export const deleteResearchLogPending: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingDeleteResearchLog = "PENDING";
};

export const deleteResearchLogFulfilled: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  const researchLog = action.payload as ResearchLog;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    researchLogsAdapter.removeOne(state, researchLog.id);
    state.loadingDeleteResearchLog = "SUCCEEDED";
  } else {
    state.loadingDeleteResearchLog = "REJECTED";
  }
};

export const deleteResearchLogRejected: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingDeleteResearchLog = "REJECTED";
};
