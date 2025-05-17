// Redux
import { createEntityAdapter } from "@reduxjs/toolkit";
// Types
import { ResearchSessionRedux } from "@/core/types";

const researchSessionCurrentStatusTypePriorities = {
  STARTED: 4,
  RESUMED: 3,
  PAUSED: 2,
  FINISHED: 1,
};

export const researchSessionsAdapter =
  createEntityAdapter<ResearchSessionRedux>({
    sortComparer: (a, b) =>
      new Date(b.currentStatusDate).getTime() -
        new Date(a.currentStatusDate).getTime() &&
      researchSessionCurrentStatusTypePriorities[b.currentStatusType] -
        researchSessionCurrentStatusTypePriorities[a.currentStatusType],
  });
