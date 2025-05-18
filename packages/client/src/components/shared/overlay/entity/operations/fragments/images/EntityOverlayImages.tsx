// React
import { FC } from "react";
// SCSS
import entityOverlayImagesStyles from "@/scss/components/shared/overlay/entity/operations/fragments/images/EntityOverlayImages.module.scss";
// Interfaces
import { EntityOverlayImagesProps } from "@/core/interfaces";
// Components
import EntityOverlayImagesList from "./EntityOverlayImagesList";
import ImageFormControl from "@/components/shared/form/ImageFormControl";
import EntityImageOverlay from "../../../images/EntityImageOverlay";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import { uploadImageToCloudinary } from "@/redux/slices/general/thunks/uploadImageToCloudinary";
import { setCurrentEntityImageOverlayCarouselId } from "@/redux/slices/general/slice";
import { selectLoadingUploadImageToCloudinary } from "@/redux/slices/general";

const EntityOverlayImages: FC<EntityOverlayImagesProps> = ({
  dto,
  type,
  onAddImagesFunction,
  onRemoveImagesFunction,
  showImageOverlay,
  setShowImageOverlay,
}) => {
  const dispatch = useAppDispatch();

  const loadingUploadImageToCloudinary = useAppSelector(
    selectLoadingUploadImageToCloudinary,
  );

  return (
    <div
      className={entityOverlayImagesStyles.overlayImagesContainer}
      style={{
        gap: type === "upsert" ? "1.5rem" : "2rem",
      }}
    >
      {type === "upsert" ? <h6>Images</h6> : <h5>Images</h5>}
      <EntityImageOverlay
        optionsType={type}
        showOverlay={showImageOverlay}
        closeOverlayFunction={() => setShowImageOverlay(false)}
        imagesPayload={{
          entityId: dto?.researchPhaseId,
          entityName: dto?.name,
          imagesSrc: dto?.imagesSrc,
        }}
        onRemoveImageFunction={onRemoveImagesFunction}
      />
      <div className={entityOverlayImagesStyles.overlayImagesContent}>
        <EntityOverlayImagesList
          isLoading={loadingUploadImageToCloudinary === "PENDING"}
          type={type}
          imagesSrc={dto?.imagesSrc}
          onImageClickFunction={(index) => {
            dispatch(setCurrentEntityImageOverlayCarouselId(index));
            setShowImageOverlay(true);
          }}
        />
        {type === "upsert" && loadingUploadImageToCloudinary !== "PENDING" && (
          <>
            <ImageFormControl
              labelContent="Add Images"
              onHoverContent="Add Images from your device"
              onHoverDisabledContent="Please wait, we are uploading some images."
              type="multiple"
              disabled={false}
              onEntityPropertyValueChange={(e) => {
                if (e.target.files) {
                  dispatch(
                    uploadImageToCloudinary({
                      entityType: "logs",
                      images: e.target.files,
                      uploadType: "multiple",
                    }),
                  )
                    .unwrap()
                    .then((images: string[]) => onAddImagesFunction(images));
                }
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EntityOverlayImages;
