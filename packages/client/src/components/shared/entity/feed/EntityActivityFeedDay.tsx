// React
import { FC } from "react";
// Interfaces
import { EntityActivityFeedDayProps } from "@/core/interfaces";
// SCSS
import entityActivityFeedDayStyles from "@/scss/components/shared/entity/feed/EntityActivityFeedDay.module.scss";
// Components
import EntityActivityFeedLog from "./EntityActivityFeedLog";

const EntityActivityFeedDay: FC<EntityActivityFeedDayProps> = ({
  activityDayId,
}) => {
  const activityLogsIds = ["1", "2", "3"];

  return (
    <div className={entityActivityFeedDayStyles.dayContainer}>
      <div className={entityActivityFeedDayStyles.dayTitleContainer}>
        <h6>October 4th</h6>
        <hr />
      </div>
      <ul className={entityActivityFeedDayStyles.dayLogsContainer}>
        {activityLogsIds.map((activityLogId) => {
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
