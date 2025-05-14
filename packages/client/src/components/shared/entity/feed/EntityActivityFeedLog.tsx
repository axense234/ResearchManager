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
  createGreenColor,
  deleteRedColor,
  mockBrownColor,
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
