// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Slices
import generalSliceReducer from "../slices/general/slice";
import researchActivitiesSliceReducer from "../slices/research/activity/slice";

const store = configureStore({
  reducer: {
    general: generalSliceReducer,
    researchActivities: researchActivitiesSliceReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
