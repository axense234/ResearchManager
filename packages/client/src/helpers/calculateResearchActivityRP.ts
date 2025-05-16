// Types
import { ResearchActivityRedux } from "@/core/types";
import { State } from "@/redux/api/store";
// Selectors
import { selectResearchPhasesByIds } from "@/redux/slices/research/phase";
// Helpers
import { calculateResearchPhaseRP } from "./calculateResearchPhaseRP";

export const calculateResearchActivityRP = (
  state: State,
  researchActivity: ResearchActivityRedux,
) => {
  const researchActivityResearchPhasesIds =
    researchActivity.researchPhasesIds || [];

  const researchActivityResearchPhases = selectResearchPhasesByIds(
    state,
    researchActivityResearchPhasesIds,
  );

  const researchActivityRP = researchActivityResearchPhases.reduce(
    (total, researchPhase) => {
      return total + calculateResearchPhaseRP(state, researchPhase);
    },
    0,
  );

  return researchActivityRP;
};
