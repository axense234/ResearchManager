// React
import { FC } from "react";
// SCSS
import entityUsedOnTitleStyles from "@/scss/components/shared/entity/view/usedOn/EntityUsedOnItem.module.scss";
// Interfaces
import { EntityUsedOnItemProps } from "@/core/interfaces";
// Types
import {
  ResearchActivityRedux,
  ResearchLogRedux,
  ResearchPhaseRedux,
} from "@/core/types";
// Redux
import { useAppDispatch, useAppSelector, useSelectEntity } from "@/hooks";
import { setViewEntityOverlay } from "@/redux/slices/general/slice";
import { setUpdateResearchLogDto } from "@/redux/slices/research/log";
import {
  selectResearchActivityIndexById,
  setCurrentResearchActivityIndex,
} from "@/redux/slices/research/activity";
import {
  selectResearchPhaseIndexById,
  setCurrentResearchPhaseIndex,
} from "@/redux/slices/research/phase";

const EntityUsedOnItem: FC<EntityUsedOnItemProps> = ({ entitySelector }) => {
  const dispatch = useAppDispatch();
  const { entityId, entityType } = entitySelector;

  const entity = useSelectEntity("entity", entityType, entityId) as
    | ResearchActivityRedux
    | ResearchPhaseRedux
    | ResearchLogRedux;

  const indexOfByResearchActivityId = useAppSelector((state) =>
    selectResearchActivityIndexById(state, entityId),
  );

  const indexOfResearchPhaseId = useAppSelector((state) =>
    selectResearchPhaseIndexById(state, entityId),
  );

  const indexUsed =
    entityType === "researchActivity"
      ? indexOfByResearchActivityId
      : indexOfResearchPhaseId;

  const indexSetterFunction =
    entityType === "researchActivity"
      ? setCurrentResearchActivityIndex
      : setCurrentResearchPhaseIndex;

  let entityTypeLabel = "RESEARCH ACTIVITY";

  switch (entityType) {
    case "researchActivity":
      entityTypeLabel = "RESEARCH ACTIVITY";
      break;
    case "researchPhase":
      entityTypeLabel = "RESEARCH PHASE";
      break;
    case "researchLog":
      entityTypeLabel = "RESEARCH LOG";
      break;
    default:
      throw new Error("Invalid entity type.");
  }

  const onEntityUsedOnItemClick = () => {
    if (entityType === "researchLog") {
      dispatch(
        setUpdateResearchLogDto({
          ...entity,
          tags: entity?.tagsIds,
        }),
      );
      dispatch(
        setViewEntityOverlay({
          entityType: "researchLog",
          showOverlay: true,
          entityId,
        }),
      );
    } else {
      dispatch(indexSetterFunction(indexUsed + 1));
      const entityView = document.getElementById(
        `dashboard-${entityType}-view`,
      );
      entityView && entityView.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={entityUsedOnTitleStyles.usedOnItemContainer}
      style={{ backgroundColor: entity?.backgroundColorOrImageSrc }}
      onClick={() => onEntityUsedOnItemClick()}
    >
      <div className={entityUsedOnTitleStyles.usedOnItemLabel}>
        <h6>{entityTypeLabel}</h6>
      </div>
      <div className={entityUsedOnTitleStyles.usedOnItemTitle}>
        <h6>{entity?.name}</h6>
      </div>
    </div>
  );
};

export default EntityUsedOnItem;
