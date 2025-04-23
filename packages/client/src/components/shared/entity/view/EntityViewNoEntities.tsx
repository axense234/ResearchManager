// Interfaces
import { FC } from "react";
import { EntityViewNoEntitiesProps } from "@/core/interfaces";
// SCSS
import entityViewNoEntitiesStyles from "@/scss/components/shared/entity/view/EntityViewNoEntities.module.scss";
// Components
import FunctionalButton from "../../general/FunctionalButton";
// Redux
import { useAppDispatch } from "@/hooks";
import { setShowProfileResearchActivitiesExamples } from "@/redux/slices/research/activity";
import { setShowProfileResearchPhasesExamples } from "@/redux/slices/research/phase";

const EntityViewNoEntities: FC<EntityViewNoEntitiesProps> = ({
  entityType,
}) => {
  const dispatch = useAppDispatch();

  const messageShown =
    entityType === "researchActivity"
      ? "No Research Activities"
      : "No Research Phases";

  const createEntityButtonTitleShown =
    entityType === "researchActivity"
      ? "Create Research Activity"
      : "Create Research Phase";

  const setShownExamplesFunc =
    entityType === "researchActivity"
      ? setShowProfileResearchActivitiesExamples
      : setShowProfileResearchPhasesExamples;

  return (
    <div className={entityViewNoEntitiesStyles.viewContainer}>
      <h6>{messageShown}</h6>
      <div className={entityViewNoEntitiesStyles.viewOptionsContainer}>
        <FunctionalButton
          content="Show Examples"
          disabled={false}
          onHoverContent="Show Examples"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() => dispatch(setShownExamplesFunc(true))}
          colorScheme="brown"
        />
        <FunctionalButton
          content={createEntityButtonTitleShown}
          disabled={false}
          onHoverContent={createEntityButtonTitleShown}
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() => dispatch(() => {})}
        />
      </div>
    </div>
  );
};

export default EntityViewNoEntities;
