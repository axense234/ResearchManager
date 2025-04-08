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

export const getUserResearchPhasesPending: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchPhases = "PENDING";
};

export const getUserResearchPhasesFulfilled: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  const researchPhases = action.payload as ResearchPhase[];
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const researchPhasesRedux = researchPhases.map((rp) => {
      return transformEntityIntoEntityRedux(
        rp,
        "researchPhase",
      ) as ResearchPhaseRedux;
    });

    researchPhasesAdapter.removeAll(state);
    researchPhasesAdapter.addMany(state, researchPhasesRedux);
    state.loadingGetUserResearchPhases = "REJECTED";
  } else {
    state.loadingGetUserResearchPhases = "FAILED";
  }
};

export const getUserResearchPhasesRejected: ExtraReducerFuncType<
  ResearchPhasesSliceStateType
> = (state, action) => {
  state.loadingGetUserResearchPhases = "FAILED";
};
