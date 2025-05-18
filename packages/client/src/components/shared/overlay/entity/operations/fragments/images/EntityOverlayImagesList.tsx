// React
import { FC } from "react";
// SCSS
import entityOverlayImagesListStyles from "@/scss/components/shared/overlay/entity/operations/fragments/images/EntityOverlayImagesList.module.scss";
// Next
import Image from "next/image";
// Interfaces
import { EntityOverlayImagesListProps } from "@/core/interfaces";
// Spin Spin Spin go brrrrrradwawdawd
import { FadeLoader } from "react-spinners";
// Data
import { mainDarkBlueColor } from "@/data/general";

const EntityOverlayImagesList: FC<EntityOverlayImagesListProps> = ({
  imagesSrc,
  onImageClickFunction,
  type,
  isLoading,
}) => {
  if (isLoading) {
    return <FadeLoader color={mainDarkBlueColor} />;
  }

  return (
    <ul
      className={entityOverlayImagesListStyles.imagesListContainer}
      style={{
        justifyContent: type === "upsert" ? "flex-start" : "center",
      }}
    >
      {imagesSrc?.length > 0 ? (
        imagesSrc?.map((imageSrc, index) => {
          return (
            <li key={imageSrc} onClick={() => onImageClickFunction(index + 1)}>
              <Image width={256} height={256} alt="a" src={imageSrc} />
            </li>
          );
        })
      ) : (
        <p>No Images.</p>
      )}
    </ul>
  );
};

export default EntityOverlayImagesList;
