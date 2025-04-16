// Types
import {
  LoadingStateType,
  ObjectKeyValueType,
  ResearchLogRedux,
  ResearchLogsSliceStateType,
} from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { ActionType } from "@researchmanager/shared/types";
// Adapter
import { researchLogsAdapter } from "./adapter";

export const researchLogsSliceReducers = {
  updateLoadingResearchLogState(
    state: ResearchLogsSliceStateType,
    action: PayloadAction<{ actionType: ActionType; value: LoadingStateType }>,
  ) {
    const actionTypeFromPayload = action.payload.actionType;
    const actionValue = action.payload.value;

    switch (actionTypeFromPayload) {
      case "GET SINGLE":
        state.loadingGetUserResearchLog = actionValue;
        break;
      case "GET MULTIPLE":
        state.loadingGetUserResearchLogs = actionValue;
        break;
      case "CREATE":
        state.loadingCreateResearchLog = actionValue;
        break;
      case "UPDATE":
        state.loadingUpdateResearchLog = actionValue;
        break;
      case "DELETE":
        state.loadingDeleteResearchLog = actionValue;
        break;
      default:
        throw new Error(
          "Invalid action type, how the f did you even get this error.",
        );
    }
  },

  updateCreateResearchLogDto(
    state: ResearchLogsSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.createResearchLogDto = {
      ...state.createResearchLogDto,
      [action.payload.key]: action.payload.value,
    };
  },
  setResearchLogs(
    state: ResearchLogsSliceStateType,
    action: PayloadAction<ResearchLogRedux[]>,
  ) {
    researchLogsAdapter.setAll(state, action.payload);
  },
};
