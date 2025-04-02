// Redux
import { createEntityAdapter } from "@reduxjs/toolkit";
// Types
import { ResearchSessionRedux } from "@/core/types";

export const researchSessionsAdapter =
  createEntityAdapter<ResearchSessionRedux>();
