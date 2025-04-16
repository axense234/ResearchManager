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

  if (!axiosError?.isAxiosError) {
    const researchPhaseRedux = transformEntityIntoEntityRedux(
      researchPhase,
      "researchPhase",
    ) as ResearchPhaseRedux;

    researchPhasesAdapter.upsertOne(state, researchPhaseRedux);
    state.loadingGetUserResearchPhase = "SUCCEEDED";
  } else {
    state.loadingGetUserResearchPhase = "REJECTED";
  }
};

export const getUserResearchPhaseRejected: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchPhase = "REJECTED";
};
