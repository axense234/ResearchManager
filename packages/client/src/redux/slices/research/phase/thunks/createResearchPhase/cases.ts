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

export const createResearchPhasePending: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingCreateResearchPhase = "PENDING";
};

export const createResearchPhaseFulfilled: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  const researchPhase = action.payload as ResearchPhase;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const researchPhaseRedux = transformEntityIntoEntityRedux(
      researchPhase,
      "researchPhase",
    ) as ResearchPhaseRedux;

    researchPhasesAdapter.addOne(state, researchPhaseRedux);
    state.loadingCreateResearchPhase = "SUCCEEDED";
  } else {
    state.loadingCreateResearchPhase = "REJECTED";
  }
};

export const createResearchPhaseRejected: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingCreateResearchPhase = "REJECTED";
};
