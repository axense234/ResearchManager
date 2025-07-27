// Interfaces
import { FC } from "react";
import { EntityViewNoEntitiesProps } from "@/core/interfaces";
// SCSS
import entityViewNoEntitiesStyles from "@/scss/components/shared/entity/view/EntityViewNoEntities.module.scss";
// Components
import FunctionalButton from "../../general/FunctionalButton";
// Redux
import { useAppDispatch } from "@/hooks";
import {
  setUpsertEntityOverlay,
  setUpsertTagOverlay,
} from "@/redux/slices/general/slice";

const EntityViewNoEntities: FC<EntityViewNoEntitiesProps> = ({
  entityType,
  setShowEntityExamples,
}) => {
  const dispatch = useAppDispatch();

  let messageShown = "No Research Activities";
  let createEntityButtonTitleShown = "Create Research Activity";
  let onCreateEntityButtonFunctionUsed =
    entityType === "tag" ? setUpsertTagOverlay : setUpsertEntityOverlay;

  switch (entityType) {
    case "researchActivity":
      messageShown = "No Research Activities";
      createEntityButtonTitleShown = "Create Research Activity";
      break;
    case "researchPhase":
      messageShown = "No Research Phases";
      createEntityButtonTitleShown = "Create Research Phase";
      break;
    case "tag":
      messageShown = "No Tags";
      createEntityButtonTitleShown = "Create Tag";
      break;
    default:
      break;
  }

  return (
    <div className={entityViewNoEntitiesStyles.viewContainer}>
      <h6>{messageShown}</h6>
      <div className={entityViewNoEntitiesStyles.viewOptionsContainer}>
        <FunctionalButton
          content="Show Examples"
          disabled={false}
          onHoverContent="Show Examples"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() => setShowEntityExamples(true)}
          colorScheme="brown"
        />
        <FunctionalButton
          content={createEntityButtonTitleShown}
          disabled={false}
          onHoverContent={createEntityButtonTitleShown}
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() =>
            dispatch(
              onCreateEntityButtonFunctionUsed({
                entityType,
                method: "create",
                showOverlay: true,
              }),
            )
          }
        />
      </div>
    </div>
  );
};

export default EntityViewNoEntities;
