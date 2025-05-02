// React
import { FC } from "react";
// Interfaces
import { EntityContainerOptionsProps } from "@/core/interfaces";
// SCSS
import entityContainerOptionsStyles from "@/scss/components/shared/entity/container/fragments/EntityContainerOptions.module.scss";
// Components
import FunctionalButton from "@/components/shared/general/FunctionalButton";

const EntityContainerOptions: FC<EntityContainerOptionsProps> = ({
  entityType,
  containerType,
  onEntityDeleteFunction,
  onEntityUpdateFunction,
}) => {
  if (containerType === "example") {
    return null;
  }

  let entityContainerOptionEntityLabel: string = "Research Activity";
  switch (entityType) {
    case "researchActivity":
      entityContainerOptionEntityLabel = "Research Activity";
      break;
    case "researchPhase":
      entityContainerOptionEntityLabel = "Research Phase";
      break;
    default:
      throw new Error("Invalid entity type.");
  }

  const updateOptionLabel = `Update ${entityContainerOptionEntityLabel}`;
  const deleteOptionLabel = `Delete ${entityContainerOptionEntityLabel}`;

  if (containerType === "entity") {
    return (
      <div
        className={entityContainerOptionsStyles.entityContainerOptionsContainer}
      >
        <FunctionalButton
          content="Update"
          disabled={false}
          onHoverContent={updateOptionLabel}
          onHoverContentDisabled="Need to update this."
          onClickFunction={onEntityUpdateFunction}
          size="small"
          colorScheme="green"
        />
        <FunctionalButton
          content="Delete"
          disabled={false}
          onHoverContent={deleteOptionLabel}
          onHoverContentDisabled="Need to update this."
          onClickFunction={onEntityDeleteFunction}
          size="small"
          colorScheme="red"
        />
      </div>
    );
  }

  if (containerType === "archived") {
    return (
      <div
        className={entityContainerOptionsStyles.entityContainerOptionsContainer}
      >
        restore, purge
      </div>
    );
  }
};

export default EntityContainerOptions;
