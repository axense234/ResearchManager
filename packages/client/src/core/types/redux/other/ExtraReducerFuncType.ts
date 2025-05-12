// Types
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export type ExtraReducerFuncType<State> = CaseReducer<
  State,
  PayloadAction<any>
>;
