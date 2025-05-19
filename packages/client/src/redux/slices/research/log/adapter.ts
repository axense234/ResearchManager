// Types
import { ResearchLogRedux } from "@/core/types";
// Redux
import { createEntityAdapter } from "@reduxjs/toolkit";

export const researchLogsAdapter = createEntityAdapter<ResearchLogRedux>({
  sortComparer: (a, b) =>
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
});
