// Types
import {
  LoadingStateType,
  ObjectKeyValueType,
  ResearchLogRedux,
  ResearchLogsSliceStateType,
} from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ActionType,
  CreateResearchLogDto,
  UpdateResearchLogDto,
} from "@researchmanager/shared/types";
// Adapter
import { researchLogsAdapter } from "./adapter";
import { selectUpdateResearchLogDto } from "./selectors";

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
  updateUpdateResearchLogDto(
    state: ResearchLogsSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.updateResearchLogDto = {
      ...state.updateResearchLogDto,
      [action.payload.key]: action.payload.value,
    };
  },
  setCreateResearchLogDto(
    state: ResearchLogsSliceStateType,
    action: PayloadAction<CreateResearchLogDto>,
  ) {
    state.createResearchLogDto = action.payload;
  },
  setUpdateResearchLogDto(
    state: ResearchLogsSliceStateType,
    action: PayloadAction<UpdateResearchLogDto>,
  ) {
    state.updateResearchLogDto = action.payload;
  },
  setResearchLogs(
    state: ResearchLogsSliceStateType,
    action: PayloadAction<ResearchLogRedux[]>,
  ) {
    researchLogsAdapter.setAll(state, action.payload);
  },
};
