// React
import { FC } from "react";
// SCSS
import profileGeneralStatisticsContentStyles from "@/scss/components/page/profile/statistics/ProfileGeneralStatisticsContent.module.scss";
// Helpers
import { calculateResearchLogRP } from "@/helpers";
// Components
import Statistic from "./Statistic";
// Redux
import { useAppSelector } from "@/hooks";
import {
  selectNumberOfResearchActivities,
  selectStatisticResearchActivity,
} from "@/redux/slices/research/activity";
import { selectNumberOfTags, selectStatisticTag } from "@/redux/slices/tag";
import {
  selectAllResearchLogs,
  selectNumberOfResearchLogs,
  selectStatisticResearchLog,
} from "@/redux/slices/research/log";
import {
  selectNumberOfResearchPhases,
  selectStatisticResearchPhase,
} from "@/redux/slices/research/phase";

const ProfileGeneralStatisticsContent: FC = () => {
  // Number of Entities
  const numberOfResearchActivities = useAppSelector(
    selectNumberOfResearchActivities,
  );
  const numberOfResearchPhases = useAppSelector(selectNumberOfResearchPhases);
  const numberOfResearchLogs = useAppSelector(selectNumberOfResearchLogs);
  const numberOfTags = useAppSelector(selectNumberOfTags);

  // Total Research Points
  const allResearchLogs = useAppSelector(selectAllResearchLogs);
  const researchPoints = calculateResearchLogRP(allResearchLogs);

  // Most/Least Tag Used
  const mostUsedTagPayload = useAppSelector((state) =>
    selectStatisticTag(state, "most"),
  );

  const leastUsedTagPayload = useAppSelector((state) =>
    selectStatisticTag(state, "least"),
  );

  // Longest/Shortest Research Log Used
  const longestResearchLog = useAppSelector((state) =>
    selectStatisticResearchLog(state, "longest"),
  );
  const shortestResearchLog = useAppSelector((state) =>
    selectStatisticResearchLog(state, "shortest"),
  );

  // Most/Least Researched Research Phase
  const mostResearchedResearchPhasePayload = useAppSelector((state) =>
    selectStatisticResearchPhase(state, "most"),
  );

  const leastResearchedResearchPhasePayload = useAppSelector((state) =>
    selectStatisticResearchPhase(state, "least"),
  );

  // Most/Leasted Researched Research Activity
  const mostResearchedActivityPhasePayload = useAppSelector((state) =>
    selectStatisticResearchActivity(state, "most"),
  );

  const leastResearchedResearchActivityPayload = useAppSelector((state) =>
    selectStatisticResearchActivity(state, "least"),
  );

  const mostUsedTagLabel = mostUsedTagPayload?.tag.title
    ? `${mostUsedTagPayload?.tag.title} (used ${mostUsedTagPayload?.tagFrequency} times)`
    : "No Tag found.";
  const leastUsedTagLabel = leastUsedTagPayload?.tag.title
    ? `${leastUsedTagPayload?.tag.title} (used ${leastUsedTagPayload?.tagFrequency} times)`
    : "No Tag found.";
  const mostResearchedResearchActivityLabel = mostResearchedActivityPhasePayload
    ?.researchActivity.name
    ? `${mostResearchedActivityPhasePayload?.researchActivity.name} (${mostResearchedActivityPhasePayload?.researchActivityRP} RP)`
    : "No Research Activity found.";
  const leastResearchedResearchActivityLabel =
    leastResearchedResearchActivityPayload?.researchActivity.name
      ? `${leastResearchedResearchActivityPayload?.researchActivity.name} (${leastResearchedResearchActivityPayload?.researchActivityRP} RP)`
      : "No Research Activity found.";
  const mostResearchedResearchPhaseLabel = mostResearchedResearchPhasePayload
    ?.researchPhase.name
    ? `${mostResearchedResearchPhasePayload?.researchPhase.name} (${mostResearchedResearchPhasePayload?.researchPhaseRP} RP)`
    : "No Research Phase found.";
  const leastResearchedResearchPhaseLabel = leastResearchedResearchPhasePayload
    ?.researchPhase.name
    ? `${leastResearchedResearchPhasePayload?.researchPhase.name} (${leastResearchedResearchPhasePayload?.researchPhaseRP} RP)`
    : "No Research Phase found.";
  const longestResearchSessionLabel = longestResearchLog?.name
    ? `${longestResearchLog?.name} (${longestResearchLog?.researchPoints} RP)`
    : "No Research Log found.";
  const shortestResearchSessionLabel = shortestResearchLog?.name
    ? `${shortestResearchLog?.name} (${shortestResearchLog?.researchPoints} RP)`
    : "No Research Log found.";

  return (
    <div className={profileGeneralStatisticsContentStyles.contentContainer}>
      <div className={profileGeneralStatisticsContentStyles.titleContainer}>
        <h5>Total Research Points</h5>
        <h5>{researchPoints} RP</h5>
      </div>
      <div className={profileGeneralStatisticsContentStyles.statisticsContent}>
        <Statistic
          label="Number of Research Activities:"
          value={String(numberOfResearchActivities)}
        />
        <Statistic
          label="Number of Research Phasees:"
          value={String(numberOfResearchPhases)}
        />
        <Statistic
          label="Number of Research Logs:"
          value={String(numberOfResearchLogs)}
        />
        <Statistic label="Number of Tags:" value={String(numberOfTags)} />
        <Statistic label="Most Used Tag:" value={mostUsedTagLabel} />
        <Statistic label="Least Used Tag:" value={leastUsedTagLabel} />
        <Statistic
          label="Most Researched Research Activity:"
          value={mostResearchedResearchActivityLabel}
        />
        <Statistic
          label="Least Researched Research Activity:"
          value={leastResearchedResearchActivityLabel}
        />
        <Statistic
          label="Most Researched Research Phase:"
          value={mostResearchedResearchPhaseLabel}
        />
        <Statistic
          label="Least Researched Research Phase:"
          value={leastResearchedResearchPhaseLabel}
        />
        <Statistic
          label="Longest Research Session:"
          value={longestResearchSessionLabel}
        />
        <Statistic
          label="Shortest Research Session:"
          value={shortestResearchSessionLabel}
        />
      </div>
    </div>
  );
};

export default ProfileGeneralStatisticsContent;
