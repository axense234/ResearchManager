// Types
import {
  ExtraReducerFuncType,
  ResearchPhaseRedux,
  ResearchPhasesSliceStateType,
} from "@/core/types";
import { AxiosError } from "axios";
import { ResearchPhase } from "@prisma/client";
// Adapter
import { researchPhasesAdapter } from "../../adapter";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const getUserResearchPhasePending: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchPhase = "PENDING";
};

export const getUserResearchPhaseFulfilled: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  const researchPhase = action.payload as ResearchPhase;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const researchPhaseRedux = transformEntityIntoEntityRedux(
      researchPhase,
      "researchPhase",
    ) as ResearchPhaseRedux;

    researchPhasesAdapter.upsertOne(state, researchPhaseRedux);
    state.loadingGetUserResearchPhase = "REJECTED";
  } else {
    state.loadingGetUserResearchPhase = "FAILED";
  }
};

export const getUserResearchPhaseRejected: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchPhase = "FAILED";
};
