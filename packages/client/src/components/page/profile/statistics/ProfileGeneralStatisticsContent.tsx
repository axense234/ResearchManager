// React
import { FC } from "react";
// SCSS
import profileGeneralStatisticsContentStyles from "@/scss/components/page/profile/statistics/ProfileGeneralStatisticsContent.module.scss";
// Helpers
import { calculateSpecialEntityRP } from "@/helpers";
// Components
import Statistic from "./Statistic";
// Redux
import { useAppSelector } from "@/hooks";
import { selectNumberOfResearchActivities } from "@/redux/slices/research/activity";
import { selectNumberOfTags, selectStatisticTag } from "@/redux/slices/tag";
import {
  selectAllResearchLogs,
  selectNumberOfResearchLogs,
} from "@/redux/slices/research/log";
import { selectNumberOfResearchPhases } from "@/redux/slices/research/phase";

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
  const researchPoints = calculateSpecialEntityRP(allResearchLogs);

  // Most/Least Used
  const mostUsedTagPayload = useAppSelector((state) =>
    selectStatisticTag(state, "most"),
  );

  const leastUsedTagPayload = useAppSelector((state) =>
    selectStatisticTag(state, "least"),
  );

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
        <Statistic
          label="Most Used Tag:"
          value={`${mostUsedTagPayload?.tag.title} (used ${mostUsedTagPayload?.numberOfEntitiesAttached} times)`}
        />
        <Statistic
          label="Least Used Tag:"
          value={`${leastUsedTagPayload?.tag.title} (used ${leastUsedTagPayload?.numberOfEntitiesAttached} times)`}
        />
      </div>
    </div>
  );
};

export default ProfileGeneralStatisticsContent;
