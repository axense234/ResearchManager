// Interfaces
import { FC, useState } from "react";
import { EntityImagesOverlayContentProps } from "@/core/interfaces";
// SCSS
import entityImagesOverlayContentStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlayContent.module.scss";
// Components
import EntityImagesOverlayItem from "./EntityImagesOverlayItem";
import EntityImagesOverlay from "./EntityImagesOverlay";

const EntityImagesOverlayContent: FC<EntityImagesOverlayContentProps> = ({
  specialEntityType,
  entityImages,
}) => {
  const [showImagesOverlay, setShowImagesOverlay] = useState<boolean>(false);
  const [currentEntityName, setCurrentEntityName] = useState<string>("");

  const entityImagesLogsSet = new Set(
    entityImages.map((entityImage) => {
      return entityImage.researchLogName;
    }),
  );

  const entityImagesLogsImages = entityImagesLogsSet
    .values()
    .toArray()
    .map((logName) => {
      return {
        imagesSrc: entityImages
          .filter((entityImage) => entityImage.researchLogName === logName)
          .map((entityImageFiltered) => entityImageFiltered.src),
        logName,
        logId: entityImages.find(
          (entityImage) => entityImage.researchLogName === logName,
        ).researchLogId,
      };
    });

  const entityImagesPhasesSet = new Set(
    entityImages.map((entityImage) => {
      return entityImage.researchPhaseName;
    }),
  );

  const entityImagesPhasesImages = entityImagesPhasesSet
    .values()
    .toArray()
    .map((phaseName) => {
      return {
        imagesSrc: entityImages
          .filter((entityImage) => entityImage.researchPhaseName === phaseName)
          .map((entityImageFiltered) => entityImageFiltered.src),
        phaseName: phaseName,
        phaseId: entityImages.find(
          (entityImage) => entityImage.researchPhaseName === phaseName,
        ).researchPhaseId,
      };
    });

  const currentEntityImages = entityImages.filter(
    (entityImage) => entityImage.researchPhaseName === currentEntityName,
  );

  if (specialEntityType === "researchPhase") {
    return (
      <ul
        className={
          entityImagesOverlayContentStyles.entityImagesOverlayContentContainer
        }
        style={{
          marginTop: "3rem",
        }}
      >
        {entityImagesLogsImages.map((logImages) => {
          return (
            <EntityImagesOverlayItem
              itemEntityType="researchLog"
              itemName={logImages.logName}
              itemImages={logImages.imagesSrc}
              itemId={logImages.logId}
            />
          );
        })}
      </ul>
    );
  } else if (specialEntityType === "researchActivity") {
    return (
      <>
        <EntityImagesOverlay
          closeOverlayFunction={() => setShowImagesOverlay(false)}
          showOverlay={showImagesOverlay}
          entityName={currentEntityName}
          specialEntityType="researchPhase"
          entityImages={currentEntityImages}
        />
        <ul
          className={
            entityImagesOverlayContentStyles.entityImagesOverlayContentContainer
          }
        >
          {entityImagesPhasesImages.map((phaseImages) => {
            return (
              <EntityImagesOverlayItem
                itemEntityType="researchPhase"
                itemName={phaseImages.phaseName}
                itemImages={phaseImages.imagesSrc}
                itemId={phaseImages.phaseId}
                onItemClickFunction={() => {
                  setCurrentEntityName(phaseImages.phaseName);
                  setShowImagesOverlay(true);
                }}
              />
            );
          })}
        </ul>
      </>
    );
  }
};

export default EntityImagesOverlayContent;
