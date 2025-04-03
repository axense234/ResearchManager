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

export const createResearchLogPending: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingCreateResearchLog = "PENDING";
};

export const createResearchLogFulfilled: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  const researchLog = action.payload as ResearchLog;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const researchLogRedux = transformEntityIntoEntityRedux(
      researchLog,
      "researchLog",
    ) as ResearchLogRedux;

    researchLogsAdapter.addOne(state, researchLogRedux);
    state.loadingCreateResearchLog = "SUCCEDED";
  } else {
    state.loadingCreateResearchLog = "FAILED";
  }
};

export const createResearchLogRejected: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingCreateResearchLog = "FAILED";
};
