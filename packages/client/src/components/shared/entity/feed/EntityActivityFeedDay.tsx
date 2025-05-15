// React
import { FC, useEffect, useRef } from "react";
// Interfaces
import { EntityActivityFeedDayProps } from "@/core/interfaces";
// SCSS
import entityActivityFeedDayStyles from "@/scss/components/shared/entity/feed/EntityActivityFeedDay.module.scss";
// Components
import EntityActivityFeedLog from "./EntityActivityFeedLog";
// Redux and Hooks
import { useAppSelector, useHandleScrollToActivityDay } from "@/hooks";
import {
  selectActivityDayById,
  selectCurrentActivityDayId,
} from "@/redux/slices/activity/day";
import { selectActivityLogsIdsByActivityDayId } from "@/redux/slices/activity/log";

const EntityActivityFeedDay: FC<EntityActivityFeedDayProps> = ({
  activityDayId,
  containerRef,
}) => {
  const activityDayRef = useRef<HTMLDivElement>(null);

  const activityDay = useAppSelector((state) =>
    selectActivityDayById(state, activityDayId),
  );

  const activityDayActivityLogs = useAppSelector((state) =>
    selectActivityLogsIdsByActivityDayId(state, activityDayId),
  );

  const currentActivityDayId = useAppSelector(selectCurrentActivityDayId);

  useHandleScrollToActivityDay(
    currentActivityDayId,
    activityDay.id,
    activityDayRef,
    containerRef,
  );

  return (
    <div
      className={entityActivityFeedDayStyles.dayContainer}
      ref={activityDayRef}
    >
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
