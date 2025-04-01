// Types
import { ResearchActivityRedux } from "@/core/types";
// Redux
import { createEntityAdapter } from "@reduxjs/toolkit";

export const researchActivitiesAdapter =
  createEntityAdapter<ResearchActivityRedux>();
