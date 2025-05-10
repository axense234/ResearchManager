// Types
import {
  LoadingStateType,
  ObjectKeyValueType,
  ResearchPhaseRedux,
  ResearchPhasesSliceStateType,
} from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ActionType,
  CreateResearchPhaseDto,
  UpdateResearchPhaseDto,
} from "@researchmanager/shared/types";
// Adapter
import { researchPhasesAdapter } from "./adapter";
// Helpers
import { handleCarouselStepDirection } from "@/helpers";

export const researchPhasesSliceReducers = {
  handleResearchPhaseExampleCarouselStepDirection(
    state: ResearchPhasesSliceStateType,
    action: PayloadAction<{ direction: "left" | "right" }>,
  ) {
    console.log("hit");
    state.currentResearchPhaseExampleIndex = handleCarouselStepDirection(
      action.payload.direction,
      state.currentResearchPhaseExampleIndex,
      state.researchPhasesExamples.length,
    );
  },
  handleResearchPhaseCarouselStepDirection(
    state: ResearchPhasesSliceStateType,
    action: PayloadAction<{ direction: "left" | "right" }>,
  ) {
    state.currentResearchPhaseIndex = handleCarouselStepDirection(
      action.payload.direction,
      state.currentResearchPhaseIndex,
      state.ids.length,
    );
  },
  updateLoadingResearchPhaseState(
    state: ResearchPhasesSliceStateType,
    action: PayloadAction<{ actionType: ActionType; value: LoadingStateType }>,
  ) {
    const actionTypeFromPayload = action.payload.actionType;
    const actionValue = action.payload.value;

    switch (actionTypeFromPayload) {
      case "GET SINGLE":
        state.loadingGetUserResearchPhase = actionValue;
        break;
      case "GET MULTIPLE":
        state.loadingGetUserResearchPhases = actionValue;
        break;
      case "CREATE":
        state.loadingCreateResearchPhase = actionValue;
        break;
      case "UPDATE":
        state.loadingUpdateResearchPhase = actionValue;
        break;
      case "DELETE":
        state.loadingDeleteResearchPhase = actionValue;
        break;
      default:
        throw new Error(
          "Invalid action type, how the f did you even get this error.",
        );
    }
  },

  updateCreateResearchPhaseDto(
    state: ResearchPhasesSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.createResearchPhaseDto = {
      ...state.createResearchPhaseDto,
      [action.payload.key]: action.payload.value,
    };
  },
  updateUpdateResearchPhaseDto(
    state: ResearchPhasesSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.updateResearchPhaseDto = {
      ...state.updateResearchPhaseDto,
      [action.payload.key]: action.payload.value,
    };
  },
  setCreateResearchPhaseDto(
    state: ResearchPhasesSliceStateType,
    action: PayloadAction<CreateResearchPhaseDto>,
  ) {
    state.createResearchPhaseDto = action.payload;
  },
  setUpdateResearchPhaseDto(
    state: ResearchPhasesSliceStateType,
    action: PayloadAction<UpdateResearchPhaseDto>,
  ) {
    state.updateResearchPhaseDto = action.payload;
  },
  setResearchPhases(
    state: ResearchPhasesSliceStateType,
    action: PayloadAction<ResearchPhaseRedux[]>,
  ) {
    researchPhasesAdapter.setAll(state, action.payload);
  },
};
