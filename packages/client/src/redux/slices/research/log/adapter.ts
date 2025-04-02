// Types
import { ResearchLogRedux } from "@/core/types";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const researchLogsAdapter = createEntityAdapter<ResearchLogRedux>();
