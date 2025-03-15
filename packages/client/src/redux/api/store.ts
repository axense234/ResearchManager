// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Slices
import generalSliceReducer from "../slices/general/slice";

const store = configureStore({
  reducer: {
    general: generalSliceReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
