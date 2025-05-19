// React
import { FC } from "react";
// SCSS
import entityOverlayOptionsStyles from "@/scss/components/shared/overlay/entity/operations/fragments/EntityOverlayOptions.module.scss";
// Interfaces
import { EntityOverlayOptionsProps } from "@/core/interfaces";
// Components
import EntityOverlayOption from "./EntityOverlayOption";
// Redux
import { useAppDispatch } from "@/hooks";
import {
  closeViewEntityOverlay,
  setDeleteEntityOverlay,
  setUpsertEntityOverlay,
  setViewEntityOverlay,
} from "@/redux/slices/general/slice";
import { updateResearchSession } from "@/redux/slices/research/session";

const EntityOverlayOptions: FC<EntityOverlayOptionsProps> = ({
  entityType,
  entityId,
  type,
  dtoUsed,
  currentStatusType,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={entityOverlayOptionsStyles.overlayOptionsContainer}>
      {type === "upsert" ? (
        <EntityOverlayOption
          type="view"
          onClickFunction={() =>
            dispatch(
              setViewEntityOverlay({
                entityType,
                showOverlay: true,
                entityId,
              }),
            )
          }
        />
      ) : (
        currentStatusType !== "FINISHED" && (
          <EntityOverlayOption
            type="edit"
            onClickFunction={() =>
              dispatch(
                setUpsertEntityOverlay({
                  entityType: "researchLog",
                  method: "update",
                  showOverlay: true,
                  entityId,
                }),
              )
            }
          />
        )
      )}
      <EntityOverlayOption
        type="delete"
        onClickFunction={() =>
          dispatch(
            setDeleteEntityOverlay({
              entityId,
              entityType,
              showOverlay: true,
            }),
          )
        }
      />
      {/* Research Session Options Only */}
      {type === "upsert" && entityType === "researchSession" && (
        <>
          {currentStatusType === "PAUSED" ? (
            <EntityOverlayOption
              type="resume"
              onClickFunction={() =>
                dispatch(
                  updateResearchSession({
                    dto: {
                      ...dtoUsed,
                      currentStatusType: "RESUMED",
                      currentStatusDate: new Date(),
                    },
                    researchSessionId: entityId,
                  }),
                )
              }
            />
          ) : (
            <EntityOverlayOption
              type="pause"
              onClickFunction={() =>
                dispatch(
                  updateResearchSession({
                    dto: {
                      ...dtoUsed,
                      currentStatusType: "PAUSED",
                      currentStatusDate: new Date(),
                      researchPoints:
                        dtoUsed?.researchPoints +
                        (new Date().getMinutes() -
                          new Date(dtoUsed?.currentStatusDate).getMinutes()),
                    },
                    researchSessionId: entityId,
                  }),
                )
              }
            />
          )}
          <EntityOverlayOption
            type="finish"
            onClickFunction={() =>
              dispatch(
                updateResearchSession({
                  dto: {
                    ...dtoUsed,
                    currentStatusType: "FINISHED",
                    currentStatusDate: new Date(),
                    researchPoints:
                      dtoUsed?.researchPoints +
                      (new Date().getMinutes() -
                        new Date(dtoUsed?.currentStatusDate).getMinutes()),
                  },
                  researchSessionId: entityId,
                }),
              )
            }
          />
        </>
      )}
    </div>
  );
};

export default EntityOverlayOptions;
