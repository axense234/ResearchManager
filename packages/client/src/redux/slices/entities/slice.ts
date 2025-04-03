// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { entitiesSliceInitialState } from "./initialState";
// Reducers
import { entitiesSliceReducers } from "./reducers";

const entitiesSlice = createSlice({
  name: "entities",
  initialState: entitiesSliceInitialState,
  reducers: entitiesSliceReducers,
});

export const { setEntitiesStateFromUserPayloadReducer } = entitiesSlice.actions;

export default entitiesSlice.reducer;
