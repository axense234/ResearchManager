// React
import { FC } from "react";
// Interfaces
import { EntityActivityFeedLogProps } from "@/core/interfaces";
// SCSS
import entityActivityFeedLogStyles from "@/scss/components/shared/entity/feed/EntityActivityFeedLog.module.scss";

const EntityActivityFeedLog: FC<EntityActivityFeedLogProps> = ({
  activityLogId,
}) => {
  const date = "date";
  const message = "message ooo";
  const subject = "CREATE";

  return (
    <div className={entityActivityFeedLogStyles.logContainer}>
      <span>
        <p>{date}</p>
        {"-"}
        <p>{subject}:</p>
      </span>
      <p>{message}</p>
    </div>
  );
};

export default EntityActivityFeedLog;
