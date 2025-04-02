// Types
import { ResearchLogsSliceStateType } from "@/core/types";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  createResearchLog,
  createResearchLogFulfilled,
  createResearchLogPending,
  createResearchLogRejected,
} from "./createResearchLog";
import {
  deleteResearchLog,
  deleteResearchLogFulfilled,
  deleteResearchLogPending,
  deleteResearchLogRejected,
} from "./deleteResearchLog";
import {
  getUserResearchLogs,
  getUserResearchLogsFulfilled,
  getUserResearchLogsPending,
  getUserResearchLogsRejected,
} from "./getUserResearchLogs";
import {
  getUserResearchLog,
  getUserResearchLogFulfilled,
  getUserResearchLogPending,
  getUserResearchLogRejected,
} from "./getUserResearchLog";
import {
  updateResearchLog,
  updateResearchLogFulfilled,
  updateResearchLogPending,
  updateResearchLogRejected,
} from "./updateResearchLog";
// Reducers

export const researchLogsSliceExtraReducers: (
  builder: ActionReducerMapBuilder<ResearchLogsSliceStateType>,
) => void = (builder) => {
  builder
    .addCase(createResearchLog.pending, createResearchLogPending)
    .addCase(createResearchLog.fulfilled, createResearchLogFulfilled)
    .addCase(createResearchLog.rejected, createResearchLogRejected)
    .addCase(deleteResearchLog.pending, deleteResearchLogPending)
    .addCase(deleteResearchLog.fulfilled, deleteResearchLogFulfilled)
    .addCase(deleteResearchLog.rejected, deleteResearchLogRejected)
    .addCase(getUserResearchLogs.pending, getUserResearchLogsPending)
    .addCase(getUserResearchLogs.fulfilled, getUserResearchLogsFulfilled)
    .addCase(getUserResearchLogs.rejected, getUserResearchLogsRejected)
    .addCase(getUserResearchLog.pending, getUserResearchLogPending)
    .addCase(getUserResearchLog.fulfilled, getUserResearchLogFulfilled)
    .addCase(getUserResearchLog.rejected, getUserResearchLogRejected)
    .addCase(updateResearchLog.pending, updateResearchLogPending)
    .addCase(updateResearchLog.fulfilled, updateResearchLogFulfilled)
    .addCase(updateResearchLog.rejected, updateResearchLogRejected);
};
