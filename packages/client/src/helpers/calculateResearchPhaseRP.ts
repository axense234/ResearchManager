// Types
import { ResearchPhaseRedux } from "@/core/types";
// Redux
import { State } from "@/redux/api/store";
import { selectResearchLogsByIds } from "@/redux/slices/research/log";
// Helpers
import { calculateResearchLogRP } from "./calculateResearchLogRP";

export const calculateResearchPhaseRP = (
  state: State,
  researchPhase: ResearchPhaseRedux,
) => {
  const researchPhaseResearchLogsIds = researchPhase.researchLogsIds || [];

  const researchPhaseResearchLogs = selectResearchLogsByIds(
    state,
    researchPhaseResearchLogsIds,
  );

  const researchPhaseRP = calculateResearchLogRP(researchPhaseResearchLogs);

  return researchPhaseRP;
};
