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

export const getUserResearchSessionsPending: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchSessions = "PENDING";
};

export const getUserResearchSessionsFulfilled: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  const researchSessions = action.payload as ResearchSession[];
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const researchSessionsRedux = researchSessions.map((session) => {
      return transformEntityIntoEntityRedux(
        session,
        "researchSession",
      ) as ResearchSessionRedux;
    });

    researchSessionsAdapter.setAll(state, researchSessionsRedux);
    state.loadingGetUserResearchSessions = "SUCCEDED";
  } else {
    state.loadingGetUserResearchSessions = "FAILED";
  }
};

export const getUserResearchSessionsRejected: ExtraReducerFuncType<
  ResearchSessionsSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchSessions = "FAILED";
};
