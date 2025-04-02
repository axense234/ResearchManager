// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Slices
import generalSliceReducer from "../slices/general/slice";
import tagsSliceReducer from "../slices/tag/slice";
import researchActivitiesSliceReducer from "../slices/research/activity/slice";
import researchPhasesSliceReducer from "../slices/research/phase/slice";
import researchLogsSliceReducer from "../slices/research/log/slice";
import researchSessionsSliceReducer from "../slices/research/session/slice";

const store = configureStore({
  reducer: {
    general: generalSliceReducer,
    researchActivities: researchActivitiesSliceReducer,
    tags: tagsSliceReducer,
    researchPhases: researchPhasesSliceReducer,
    researchLogs: researchLogsSliceReducer,
    researchSessions: researchSessionsSliceReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
