// Types
import { ResearchSessionsSliceStateType } from "@/core/types";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// Extra Reducers
import {
  createResearchSession,
  createResearchSessionFulfilled,
  createResearchSessionPending,
  createResearchSessionRejected,
} from "./createResearchSession";
import {
  deleteResearchSession,
  deleteResearchSessionFulfilled,
  deleteResearchSessionPending,
  deleteResearchSessionRejected,
} from "./deleteResearchSession";
import {
  getUserResearchSessions,
  getUserResearchSessionsFulfilled,
  getUserResearchSessionsPending,
  getUserResearchSessionsRejected,
} from "./getUserResearchSessions";
import {
  getUserResearchSession,
  getUserResearchSessionFulfilled,
  getUserResearchSessionPending,
  getUserResearchSessionRejected,
} from "./getUserResearchSession";
import {
  updateResearchSession,
  updateResearchSessionFulfilled,
  updateResearchSessionPending,
  updateResearchSessionRejected,
} from "./updateResearchSession";

export const researchSessionsSliceExtraReducers: (
  builder: ActionReducerMapBuilder<ResearchSessionsSliceStateType>,
) => void = (builder) => {
  builder
    .addCase(createResearchSession.pending, createResearchSessionPending)
    .addCase(createResearchSession.fulfilled, createResearchSessionFulfilled)
    .addCase(createResearchSession.rejected, createResearchSessionRejected)
    .addCase(deleteResearchSession.pending, deleteResearchSessionPending)
    .addCase(deleteResearchSession.fulfilled, deleteResearchSessionFulfilled)
    .addCase(deleteResearchSession.rejected, deleteResearchSessionRejected)
    .addCase(getUserResearchSessions.pending, getUserResearchSessionsPending)
    .addCase(
      getUserResearchSessions.fulfilled,
      getUserResearchSessionsFulfilled,
    )
    .addCase(getUserResearchSessions.rejected, getUserResearchSessionsRejected)
    .addCase(getUserResearchSession.pending, getUserResearchSessionPending)
    .addCase(getUserResearchSession.fulfilled, getUserResearchSessionFulfilled)
    .addCase(getUserResearchSession.rejected, getUserResearchSessionRejected)
    .addCase(updateResearchSession.pending, updateResearchSessionPending)
    .addCase(updateResearchSession.fulfilled, updateResearchSessionFulfilled)
    .addCase(updateResearchSession.rejected, updateResearchSessionRejected);
};
