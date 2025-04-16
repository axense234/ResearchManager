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

export const getUserResearchLogsPending: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchLogs = "PENDING";
};

export const getUserResearchLogsFulfilled: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  const researchLogs = action.payload as ResearchLog[];
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const researchLogsRedux = researchLogs.map((log) => {
      return transformEntityIntoEntityRedux(
        log,
        "researchLog",
      ) as ResearchLogRedux;
    });

    researchLogsAdapter.removeAll(state);
    researchLogsAdapter.addMany(state, researchLogsRedux);
    state.loadingGetUserResearchLogs = "SUCCEEDED";
  } else {
    state.loadingGetUserResearchLogs = "REJECTED";
  }
};

export const getUserResearchLogsRejected: ExtraReducerFuncType<
  ResearchLogsSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchLogs = "REJECTED";
};
