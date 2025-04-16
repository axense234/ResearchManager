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

  if (!axiosError?.isAxiosError) {
    const researchLogRedux = transformEntityIntoEntityRedux(
      researchLog,
      "researchLog",
    ) as ResearchLogRedux;

    researchLogsAdapter.addOne(state, researchLogRedux);
    state.loadingCreateResearchLog = "SUCCEEDED";
  } else {
    state.loadingCreateResearchLog = "REJECTED";
  }
};

export const createResearchLogRejected: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingCreateResearchLog = "REJECTED";
};
