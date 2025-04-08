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

export const getUserResearchLogPending: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchLog = "PENDING";
};

export const getUserResearchLogFulfilled: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  const researchLog = action.payload as ResearchLog;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const researchLogRedux = transformEntityIntoEntityRedux(
      researchLog,
      "researchLog",
    ) as ResearchLogRedux;

    researchLogsAdapter.upsertOne(state, researchLogRedux);
    state.loadingGetUserResearchLog = "REJECTED";
  } else {
    state.loadingGetUserResearchLog = "FAILED";
  }
};

export const getUserResearchLogRejected: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchLog = "FAILED";
};
