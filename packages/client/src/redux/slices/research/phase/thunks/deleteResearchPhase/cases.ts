// Types
import {
  ExtraReducerFuncType,
  ResearchPhasesSliceStateType,
} from "@/core/types";
import { AxiosError } from "axios";
import { ResearchPhase } from "@prisma/client";
// Adapter
import { researchPhasesAdapter } from "../../adapter";

export const deleteResearchPhasePending: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingDeleteResearchPhase = "PENDING";
};

export const deleteResearchPhaseFulfilled: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  const researchPhase = action.payload as ResearchPhase;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    researchPhasesAdapter.removeOne(state, researchPhase.id);
    state.loadingDeleteResearchPhase = "SUCCEEDED";
  } else {
    state.loadingDeleteResearchPhase = "REJECTED";
  }
};

export const deleteResearchPhaseRejected: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingDeleteResearchPhase = "REJECTED";
};
