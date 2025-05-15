// React
import { FC } from "react";
// Interfaces
import { EntityActivityFeedProps } from "@/core/interfaces";
// SCSS
import entityActivityFeedStyles from "@/scss/components/shared/entity/feed/EntityActivityFeed.module.scss";
// Components
import EntityActivityFeedSearchBar from "./EntityActivityFeedSearchBar";
import EntityActivityFeedDays from "./EntityActivityFeedDays";
// Redux
import { useAppSelector } from "@/hooks";
import { selectActivityDaysIdsByActivityFeedId } from "@/redux/slices/activity/day";

const EntityActivityFeed: FC<EntityActivityFeedProps> = ({
  activityFeedId,
}) => {
  const activityFeedActivityDaysIds = useAppSelector((state) =>
    selectActivityDaysIdsByActivityFeedId(state, activityFeedId),
  );

  return (
    <section className={entityActivityFeedStyles.feedContainer}>
      <EntityActivityFeedSearchBar
        activityDaysIds={activityFeedActivityDaysIds}
      />
      <EntityActivityFeedDays activityDaysIds={activityFeedActivityDaysIds} />
    </section>
  );
};

export default EntityActivityFeed;
