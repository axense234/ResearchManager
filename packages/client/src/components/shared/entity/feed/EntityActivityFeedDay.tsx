// React
import { FC } from "react";
// Interfaces
import { EntityActivityFeedDayProps } from "@/core/interfaces";
// SCSS
import entityActivityFeedDayStyles from "@/scss/components/shared/entity/feed/EntityActivityFeedDay.module.scss";
// Components
import EntityActivityFeedLog from "./EntityActivityFeedLog";
// Redux
import { useAppSelector } from "@/hooks";
import { selectActivityDayById } from "@/redux/slices/activity/day";
import { selectActivityLogsIdsByActivityDayId } from "@/redux/slices/activity/log";

const EntityActivityFeedDay: FC<EntityActivityFeedDayProps> = ({
  activityDayId,
}) => {
  const activityDay = useAppSelector((state) =>
    selectActivityDayById(state, activityDayId),
  );

  const activityDayActivityLogs = useAppSelector((state) =>
    selectActivityLogsIdsByActivityDayId(state, activityDayId),
  );

  return (
    <div className={entityActivityFeedDayStyles.dayContainer}>
      <div className={entityActivityFeedDayStyles.dayTitleContainer}>
        <h6>
          {new Date(activityDay?.createdAt).toLocaleString(undefined, {
            month: "long",
            day: "numeric",
          })}
        </h6>
        <hr />
      </div>
      <ul className={entityActivityFeedDayStyles.dayLogsContainer}>
        {activityDayActivityLogs?.map((activityLogId) => {
          return (
            <li key={activityLogId}>
              <EntityActivityFeedLog activityLogId={activityLogId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EntityActivityFeedDay;
