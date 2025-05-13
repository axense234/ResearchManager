// React
import { FC } from "react";
// Interfaces
import { EntityActivityFeedProps } from "@/core/interfaces";
// SCSS
import entityActivityFeedStyles from "@/scss/components/shared/entity/feed/EntityActivityFeed.module.scss";
// Components
import EntityActivityFeedSearchBar from "./EntityActivityFeedSearchBar";
import EntityActivityFeedDays from "./EntityActivityFeedDays";

const EntityActivityFeed: FC<EntityActivityFeedProps> = ({
  activityDaysIds,
}) => {
  return (
    <section className={entityActivityFeedStyles.feedContainer}>
      <EntityActivityFeedSearchBar />
      <EntityActivityFeedDays activityDaysIds={activityDaysIds} />
    </section>
  );
};

export default EntityActivityFeed;
