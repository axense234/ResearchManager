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

  if (axiosError !== undefined && !axiosError.response) {
    researchLogsAdapter.removeOne(state, researchLog.id);
    state.loadingDeleteResearchLog = "SUCCEDED";
  } else {
    state.loadingDeleteResearchLog = "FAILED";
  }
};

export const deleteResearchLogRejected: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingDeleteResearchLog = "FAILED";
};
