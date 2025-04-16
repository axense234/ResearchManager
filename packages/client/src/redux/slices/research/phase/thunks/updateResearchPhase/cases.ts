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

export const updateResearchPhasePending: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingUpdateResearchPhase = "PENDING";
};

export const updateResearchPhaseFulfilled: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  const researchPhase = action.payload as ResearchPhase;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const researchPhaseRedux = transformEntityIntoEntityRedux(
      researchPhase,
      "researchPhase",
    ) as ResearchPhaseRedux;

    researchPhasesAdapter.updateOne(state, {
      changes: { ...researchPhaseRedux },
      id: researchPhaseRedux.id,
    });
    state.loadingUpdateResearchPhase = "SUCCEEDED";
  } else {
    state.loadingUpdateResearchPhase = "REJECTED";
  }
};

export const updateResearchPhaseRejected: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingUpdateResearchPhase = "REJECTED";
};
