// React
import { FC } from "react";
// Interfaces
import { EntityImagesOverlayItemProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// SCSS
import entityImagesOverlayItemStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlayItem.module.scss";

const EntityImagesOverlayItem: FC<EntityImagesOverlayItemProps> = ({
  itemEntityType,
  specialImages,
  itemTitle,
  parentId,
  onItemClickFunction,
  onImageClickFunction,
}) => {
  return (
    <div className={entityImagesOverlayItemStyles.itemContainer}>
      <h6
        onClick={() => onItemClickFunction(itemTitle)}
        style={{
          cursor: itemEntityType === "researchPhase" ? "pointer" : "initial",
        }}
        title={
          itemEntityType === "researchPhase"
            ? `${itemTitle} Phase Images`
            : null
        }
        aria-label={
          itemEntityType === "researchPhase"
            ? `${itemTitle} Phase Images`
            : null
        }
      >
        {itemTitle}
      </h6>
      <ul className={entityImagesOverlayItemStyles.itemImages}>
        {specialImages?.map(({ src, logId }, index) => {
          return (
            <li
              key={index}
              onClick={() => onImageClickFunction(logId, parentId, index + 1)}
            >
              <Image
                width={256}
                height={256}
                alt={`${itemTitle} Image`}
                title={`View ${itemTitle} Image`}
                aria-label={`View ${itemTitle} Image`}
                src={src}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EntityImagesOverlayItem;
