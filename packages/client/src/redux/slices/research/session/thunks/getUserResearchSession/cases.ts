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

  if (!axiosError?.isAxiosError) {
    const researchSessionRedux = transformEntityIntoEntityRedux(
      researchSession,
      "researchSession",
    ) as ResearchSessionRedux;

    researchSessionsAdapter.upsertOne(state, researchSessionRedux);
    state.loadingGetUserResearchSession = "SUCCEEDED";
  } else {
    state.loadingGetUserResearchSession = "REJECTED";
  }
};

export const getUserResearchSessionRejected: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchSession = "REJECTED";
};
