// React
import { FC } from "react";
// Interfaces
import { EntityActivityFeedLogProps } from "@/core/interfaces";
// SCSS
import entityActivityFeedLogStyles from "@/scss/components/shared/entity/feed/EntityActivityFeedLog.module.scss";
// Redux
import { useAppSelector } from "@/hooks";
import { selectActivityLogById } from "@/redux/slices/activity/log";
// Data
import {
  cancelGrayColor,
  createGreenColor,
  deleteRedColor,
  mockBrownColor,
  pauseGreenColor,
  resumeYellowColor,
  updateOrangeColor,
} from "@/data/general";

const EntityActivityFeedLog: FC<EntityActivityFeedLogProps> = ({
  activityLogId,
}) => {
  const activityLog = useAppSelector((state) =>
    selectActivityLogById(state, activityLogId),
  );

  let activityLogSubjectColor = createGreenColor;

  switch (activityLog?.subject) {
    case "CREATE":
      activityLogSubjectColor = createGreenColor;
      break;
    case "UPDATE":
      activityLogSubjectColor = updateOrangeColor;
      break;
    case "ARCHIVE":
      activityLogSubjectColor = mockBrownColor;
      break;
    case "PURGE":
      activityLogSubjectColor = deleteRedColor;
      break;
    case "RESEARCH_START":
      activityLogSubjectColor = pauseGreenColor;
      break;
    case "RESEARCH_PAUSE":
      activityLogSubjectColor = cancelGrayColor;
      break;
    case "RESEARCH_RESUME":
      activityLogSubjectColor = resumeYellowColor;
      break;
    case "RESEARCH_END":
      activityLogSubjectColor = deleteRedColor;
      break;
    default:
      break;
  }

  return (
    <div className={entityActivityFeedLogStyles.logContainer}>
      <span>
        <p>{new Date(activityLog?.createdAt).toLocaleString()}</p>
        <p>-</p>
        <p style={{ color: activityLogSubjectColor }}>
          {activityLog?.subject}:
        </p>
      </span>
      <p>{activityLog?.message}</p>
    </div>
  );
};

export default EntityActivityFeedLog;
