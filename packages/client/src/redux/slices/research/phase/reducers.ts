// Types
import {
  LoadingStateType,
  ObjectKeyValueType,
  ResearchPhaseRedux,
  ResearchPhasesSliceStateType,
} from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { ActionType } from "@researchmanager/shared/types";
import { researchPhasesAdapter } from "./adapter";
import { researchPhasesMockData } from "@researchmanager/shared/mock";
import { transformEntityIntoEntityRedux } from "@/helpers";

export const researchPhasesSliceReducers = {
  testAdapter(
    state: ResearchPhasesSliceStateType,
    action: PayloadAction<boolean>,
  ) {
    console.log("did something?");

    researchPhasesAdapter.upsertOne(
      state,
      transformEntityIntoEntityRedux(
        researchPhasesMockData[0],
      ) as ResearchPhaseRedux,
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
};
