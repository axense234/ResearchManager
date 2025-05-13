// React
import { FC } from "react";
// Interfaces
import { EntityActivityFeedDaysProps } from "@/core/interfaces";
// SCSS
import entityActivityFeedDaysStyles from "@/scss/components/shared/entity/feed/EntityActivityFeedDays.module.scss";
// Components
import EntityActivityFeedDay from "./EntityActivityFeedDay";

const EntityActivityFeedDays: FC<EntityActivityFeedDaysProps> = ({
  activityDaysIds,
}) => {
  return (
    <div className={entityActivityFeedDaysStyles.daysContainer}>
      {activityDaysIds.map((activityDayId) => {
        return (
          <EntityActivityFeedDay
            key={activityDayId}
            activityDayId={activityDayId}
          />
        );
      })}
    </div>
  );
};

export default EntityActivityFeedDays;
