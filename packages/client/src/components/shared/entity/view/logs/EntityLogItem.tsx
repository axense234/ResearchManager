// React
import { FC } from "react";
// SCSS
import entityLogItemStyles from "@/scss/components/shared/entity/view/logs/EntityLogItem.module.scss";
// Interfaces
import { EntityLogItemProps } from "@/core/interfaces";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectResearchLogById,
  setUpdateResearchLogDto,
} from "@/redux/slices/research/log";
import { setViewEntityOverlay } from "@/redux/slices/general/slice";

const EntityLogItem: FC<EntityLogItemProps> = ({
  researchLogId,
  researchLogIndex,
}) => {
  const dispatch = useAppDispatch();

  const researchLog = useAppSelector((state) =>
    selectResearchLogById(state, researchLogId),
  );

  return (
    <div
      className={entityLogItemStyles.logContainer}
      title="Show More"
      aria-label="Show More"
      onClick={() => {
        dispatch(
          setUpdateResearchLogDto({
            ...researchLog,
            tags: researchLog.tagsIds,
          }),
        );
        dispatch(
          setViewEntityOverlay({
            entityType: "researchLog",
            showOverlay: true,
            entityId: researchLog.id,
          }),
        );
      }}
    >
      <span>#{researchLogIndex}</span>|<span>{researchLog?.name}</span>
    </div>
  );
};

export default EntityLogItem;
