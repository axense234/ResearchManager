// React
import { FC } from "react";
// Interfaces
import { EntitySessionItemProps } from "@/core/interfaces";
// SCSS
import entitySessionItemStyles from "@/scss/components/shared/entity/view/sessions/EntitySessionItem.module.scss";
// Redux and Hooks
import {
  useAppDispatch,
  useAppSelector,
  useDetermineEntitySessionItemDetails,
} from "@/hooks";
import {
  selectResearchSessionById,
  setUpdateResearchSessionDto,
} from "@/redux/slices/research/session";
import {
  setUpsertEntityOverlay,
  setViewEntityOverlay,
} from "@/redux/slices/general/slice";

const EntitySessionItem: FC<EntitySessionItemProps> = ({
  researchSessionId,
  researchSessionIndex,
}) => {
  const dispatch = useAppDispatch();

  const researchSession = useAppSelector((state) =>
    selectResearchSessionById(state, researchSessionId),
  );

  const { sessionBackgroundColor, sessionTimeDetails } =
    useDetermineEntitySessionItemDetails(researchSession);

  return (
    <div
      className={entitySessionItemStyles.sessionContainer}
      style={{ backgroundColor: sessionBackgroundColor }}
      onClick={() => {
        dispatch(
          setUpdateResearchSessionDto({
            ...researchSession,
            tags: researchSession.tagsIds,
          }),
        );
        if (researchSession.currentStatusType === "FINISHED") {
          dispatch(
            setViewEntityOverlay({
              entityType: "researchSession",
              showOverlay: true,
              entityId: researchSession.id,
            }),
          );
        } else {
          dispatch(
            setUpsertEntityOverlay({
              entityType: "researchSession",
              method: "update",
              showOverlay: true,
              entityId: researchSessionId,
            }),
          );
        }
      }}
    >
      <div className={entitySessionItemStyles.sessionTitle}>
        <span>#{researchSessionIndex}</span>
        <h6>{researchSession.name}</h6>
      </div>
      <p title={sessionTimeDetails} aria-label={sessionTimeDetails}>
        {sessionTimeDetails}
      </p>
    </div>
  );
};

export default EntitySessionItem;
