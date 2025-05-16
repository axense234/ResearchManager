// Types
import { ResearchLogRedux } from "@/core/types";
import { ResearchLog } from "@prisma/client";

export const calculateResearchLogRP = (
  researchLogs: ResearchLog[] | ResearchLogRedux[],
) => {
  const entityRP = researchLogs.reduce(
    (total, log) => total + log.researchPoints,
    0,
  );

  return entityRP;
};
