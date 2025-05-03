// Interfaces
import { FC } from "react";
import { EntityViewNoEntitiesProps } from "@/core/interfaces";
// SCSS
import entityViewNoEntitiesStyles from "@/scss/components/shared/entity/view/EntityViewNoEntities.module.scss";
// Components
import FunctionalButton from "../../general/FunctionalButton";
// Redux
import { useAppDispatch } from "@/hooks";

const EntityViewNoEntities: FC<EntityViewNoEntitiesProps> = ({
  entityType,
  setShowEntityExamples,
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
          onClickFunction={() => dispatch(() => {})}
        />
      </div>
    </div>
  );
};

export default EntityViewNoEntities;
