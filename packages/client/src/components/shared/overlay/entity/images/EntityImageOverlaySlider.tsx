// React
import { FC } from "react";
// SCSS
import entityImageOverlaySliderStyles from "@/scss/components/shared/overlay/entity/images/EntityImageOverlaySlider.module.scss";
// Interfaces
import { EntityImageOverlaySliderProps } from "@/core/interfaces";
// Components
import NavButton from "@/components/shared/general/NavButton";
import EntityImageOverlayImage from "./EntityImageOverlayImage";
// Redux
import { useAppDispatch } from "@/hooks";
import { handleEntityImageOverlayCarouselStepDirection } from "@/redux/slices/general/slice";

const EntityImageOverlaySlider: FC<EntityImageOverlaySliderProps> = ({
  imagesPayload,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={entityImageOverlaySliderStyles.sliderContainer}>
      <NavButton
        direction="prev"
        showButton={true}
        type="light"
        onNavButtonClick={() =>
          dispatch(
            handleEntityImageOverlayCarouselStepDirection({
              direction: "left",
              numberOfImages: imagesPayload.imagesSrc?.length,
            }),
          )
        }
      />
      <EntityImageOverlayImage imagesPayload={imagesPayload} />
      <NavButton
        direction="next"
        showButton={true}
        type="light"
        onNavButtonClick={() =>
          dispatch(
            handleEntityImageOverlayCarouselStepDirection({
              direction: "right",
              numberOfImages: imagesPayload.imagesSrc?.length,
            }),
          )
        }
      />
    </div>
  );
};

export default EntityImageOverlaySlider;
