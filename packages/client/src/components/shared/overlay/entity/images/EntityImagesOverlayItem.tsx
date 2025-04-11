// Interfaces
import { FC } from "react";
import { EntityImagesOverlayItemProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// SCSS
import entityImagesOverlayItemStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlayItem.module.scss";

const EntityImagesOverlayItem: FC<EntityImagesOverlayItemProps> = ({
  itemName,
  itemId,
  itemImages,
  itemEntityType,
  onItemClickFunction,
}) => {
  return (
    <li key={itemId} className={entityImagesOverlayItemStyles.itemContainer}>
      <h6
        onClick={onItemClickFunction}
        style={{
          cursor: itemEntityType === "researchPhase" ? "pointer" : "initial",
        }}
        title={
          itemEntityType === "researchPhase" ? `${itemName} Phase Images` : null
        }
        aria-label={
          itemEntityType === "researchPhase" ? `${itemName} Phase Images` : null
        }
      >
        {itemName}
      </h6>
      <ul className={entityImagesOverlayItemStyles.itemImages}>
        {itemImages?.map((entityImage) => {
          return (
            <li key={entityImage + itemId}>
              <Image
                width={256}
                height={256}
                alt={`${itemName} Image`}
                title={`View ${itemName} Image`}
                aria-label={`View ${itemName} Image`}
                src={entityImage}
              />
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default EntityImagesOverlayItem;
