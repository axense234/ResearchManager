// Interfaces
import { FC } from "react";
import { EntityContainerOptionsProps } from "@/core/interfaces";
// SCSS
import entityContainerOptionsStyles from "@/scss/components/shared/entity/container/fragments/EntityContainerOptions.module.scss";

const EntityContainerOptions: FC<EntityContainerOptionsProps> = ({
  entityId,
  entityType,
  containerType,
}) => {
  if (containerType === "example") {
    return null;
  }

  if (containerType === "entity") {
    return (
      <div
        className={entityContainerOptionsStyles.entityContainerOptionsContainer}
      >
        update, delete
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
