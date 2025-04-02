// Types
import {
  ExtraReducerFuncType,
  ResearchLogRedux,
  ResearchLogsSliceStateType,
} from "@/core/types";
import { AxiosError } from "axios";
import { ResearchLog } from "@prisma/client";
// Adapter
import { researchLogsAdapter } from "../../adapter";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const updateResearchLogPending: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingUpdateResearchLog = "PENDING";
};

export const updateResearchLogFulfilled: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  const researchLog = action.payload as ResearchLog;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const researchLogRedux = transformEntityIntoEntityRedux(
      researchLog,
    ) as ResearchLogRedux;

    researchLogsAdapter.updateOne(state, {
      changes: { ...researchLogRedux },
      id: researchLogRedux.id,
    });
    state.loadingUpdateResearchLog = "SUCCEDED";
  } else {
    state.loadingUpdateResearchLog = "FAILED";
  }
};

export const updateResearchLogRejected: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingUpdateResearchLog = "FAILED";
};
