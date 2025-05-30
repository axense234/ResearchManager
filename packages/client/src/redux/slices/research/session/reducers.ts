// Types
import {
  LoadingStateType,
  ObjectKeyValueType,
  ResearchSessionRedux,
  ResearchSessionsSliceStateType,
} from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ActionType,
  CreateResearchSessionDto,
  UpdateResearchSessionDto,
} from "@researchmanager/shared/types";
import { researchSessionsAdapter } from "./adapter";

export const researchSessionsSliceReducers = {
  updateLoadingResearchSessionState(
    state: ResearchSessionsSliceStateType,
    action: PayloadAction<{ actionType: ActionType; value: LoadingStateType }>,
  ) {
    const actionTypeFromPayload = action.payload.actionType;
    const actionValue = action.payload.value;

    switch (actionTypeFromPayload) {
      case "GET SINGLE":
        state.loadingGetUserResearchSession = actionValue;
        break;
      case "GET MULTIPLE":
        state.loadingGetUserResearchSessions = actionValue;
        break;
      case "CREATE":
        state.loadingCreateResearchSession = actionValue;
        break;
      case "UPDATE":
        state.loadingUpdateResearchSession = actionValue;
        break;
      case "DELETE":
        state.loadingDeleteResearchSession = actionValue;
        break;
      default:
        throw new Error(
          "Invalid action type, how the f did you even get this error.",
        );
    }
  },

  updateCreateResearchSessionDto(
    state: ResearchSessionsSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.createResearchSessionDto = {
      ...state.createResearchSessionDto,
      [action.payload.key]: action.payload.value,
    };
  },
  updateUpdateResearchSessionDto(
    state: ResearchSessionsSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.updateResearchSessionDto = {
      ...state.updateResearchSessionDto,
      [action.payload.key]: action.payload.value,
    };
  },
  setCreateResearchSessionDto(
    state: ResearchSessionsSliceStateType,
    action: PayloadAction<CreateResearchSessionDto>,
  ) {
    state.createResearchSessionDto = action.payload;
  },
  setUpdateResearchSessionDto(
    state: ResearchSessionsSliceStateType,
    action: PayloadAction<UpdateResearchSessionDto>,
  ) {
    state.updateResearchSessionDto = action.payload;
  },
  setResearchSessions(
    state: ResearchSessionsSliceStateType,
    action: PayloadAction<ResearchSessionRedux[]>,
  ) {
    researchSessionsAdapter.setAll(state, action.payload);
  },
};
