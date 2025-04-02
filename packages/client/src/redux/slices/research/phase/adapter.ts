// Types
import { ResearchPhaseRedux } from "@/core/types";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const researchPhasesAdapter = createEntityAdapter<ResearchPhaseRedux>();
