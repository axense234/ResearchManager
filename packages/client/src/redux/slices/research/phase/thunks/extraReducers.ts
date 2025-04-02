// Types
import { ResearchPhasesSliceStateType } from "@/core/types";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// Extra Reducers
import {
  createResearchPhase,
  createResearchPhaseFulfilled,
  createResearchPhasePending,
  createResearchPhaseRejected,
} from "./createResearchPhase";
import {
  deleteResearchPhase,
  deleteResearchPhaseFulfilled,
  deleteResearchPhasePending,
  deleteResearchPhaseRejected,
} from "./deleteResearchPhase";
import {
  getUserResearchPhases,
  getUserResearchPhasesFulfilled,
  getUserResearchPhasesPending,
  getUserResearchPhasesRejected,
} from "./getUserResearchPhases";
import {
  getUserResearchPhase,
  getUserResearchPhaseFulfilled,
  getUserResearchPhasePending,
  getUserResearchPhaseRejected,
} from "./getUserResearchPhase";
import {
  updateResearchPhase,
  updateResearchPhaseFulfilled,
  updateResearchPhasePending,
  updateResearchPhaseRejected,
} from "./updateResearchPhase";

export const researchPhasesSliceExtraReducers: (
  builder: ActionReducerMapBuilder<ResearchPhasesSliceStateType>,
) => void = (builder) => {
  builder
    .addCase(createResearchPhase.pending, createResearchPhasePending)
    .addCase(createResearchPhase.fulfilled, createResearchPhaseFulfilled)
    .addCase(createResearchPhase.rejected, createResearchPhaseRejected)
    .addCase(deleteResearchPhase.pending, deleteResearchPhasePending)
    .addCase(deleteResearchPhase.fulfilled, deleteResearchPhaseFulfilled)
    .addCase(deleteResearchPhase.rejected, deleteResearchPhaseRejected)
    .addCase(getUserResearchPhases.pending, getUserResearchPhasesPending)
    .addCase(getUserResearchPhases.fulfilled, getUserResearchPhasesFulfilled)
    .addCase(getUserResearchPhases.rejected, getUserResearchPhasesRejected)
    .addCase(getUserResearchPhase.pending, getUserResearchPhasePending)
    .addCase(getUserResearchPhase.fulfilled, getUserResearchPhaseFulfilled)
    .addCase(getUserResearchPhase.rejected, getUserResearchPhaseRejected)
    .addCase(updateResearchPhase.pending, updateResearchPhasePending)
    .addCase(updateResearchPhase.fulfilled, updateResearchPhaseFulfilled)
    .addCase(updateResearchPhase.rejected, updateResearchPhaseRejected);
};
