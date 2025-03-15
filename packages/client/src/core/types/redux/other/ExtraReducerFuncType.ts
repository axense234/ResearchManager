// Types
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export type ExtraReducerFuncType<State> = CaseReducer<
  State,
  PayloadAction<AxiosError<unknown, any> | undefined | unknown, string, never>
>;
