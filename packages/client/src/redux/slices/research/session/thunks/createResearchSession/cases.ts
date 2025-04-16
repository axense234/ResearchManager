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

export const createResearchSessionPending: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingCreateResearchSession = "PENDING";
};

export const createResearchSessionFulfilled: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  const researchSession = action.payload as ResearchSession;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const researchSessionRedux = transformEntityIntoEntityRedux(
      researchSession,
      "researchSession",
    ) as ResearchSessionRedux;

    researchSessionsAdapter.addOne(state, researchSessionRedux);
    state.loadingCreateResearchSession = "SUCCEEDED";
  } else {
    state.loadingCreateResearchSession = "REJECTED";
  }
};

export const createResearchSessionRejected: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingCreateResearchSession = "REJECTED";
};
