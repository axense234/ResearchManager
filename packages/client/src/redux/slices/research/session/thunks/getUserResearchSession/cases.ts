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

export const getUserResearchSessionPending: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchSession = "PENDING";
};

export const getUserResearchSessionFulfilled: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  const researchSession = action.payload as ResearchSession;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const researchSessionRedux = transformEntityIntoEntityRedux(
      researchSession,
    ) as ResearchSessionRedux;

    researchSessionsAdapter.upsertOne(state, researchSessionRedux);
    state.loadingGetUserResearchSession = "SUCCEDED";
  } else {
    state.loadingGetUserResearchSession = "FAILED";
  }
};

export const getUserResearchSessionRejected: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchSession = "FAILED";
};
