// React
import { FC, useRef } from "react";
// Interfaces
import { EntityActivityFeedDaysProps } from "@/core/interfaces";
// SCSS
import entityActivityFeedDaysStyles from "@/scss/components/shared/entity/feed/EntityActivityFeedDays.module.scss";
// Components
import EntityActivityFeedDay from "./EntityActivityFeedDay";

const EntityActivityFeedDays: FC<EntityActivityFeedDaysProps> = ({
  activityDaysIds,
}) => {
  const activityFeedDaysRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={entityActivityFeedDaysStyles.daysContainer}
      ref={activityFeedDaysRef}
    >
      {activityDaysIds?.map((activityDayId) => {
        return (
          <EntityActivityFeedDay
            key={activityDayId}
            activityDayId={activityDayId}
            containerRef={activityFeedDaysRef}
          />
        );
      })}
    </div>
  );
};

export default EntityActivityFeedDays;
