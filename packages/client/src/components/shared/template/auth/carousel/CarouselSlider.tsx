// React
import { FC } from "react";
// SCSS
import carouselSliderStyles from "@/scss/components/shared/template/auth/carousel/CarouselSlider.module.scss";
// Data
import { authCarouselContent } from "@/data/general/components";
// Components
import CarouselContent from "./CarouselContent";
// Helpers
import { determineContentPosition } from "@/helpers";
// Redux
import { useAppSelector } from "@/hooks";
import { selectCurrentAuthCarouselId } from "@/redux/slices/general";

const CarouselSlider: FC = () => {
  const currentAuthCarouselIndex = useAppSelector(selectCurrentAuthCarouselId);

  return (
    <div className={carouselSliderStyles.sliderContainer}>
      {authCarouselContent.map((section, sectionIndex) => {
        const position = determineContentPosition(
          sectionIndex + 1,
          currentAuthCarouselIndex,
          authCarouselContent.length,
        );

        if (position === "not-needed") return null;

        return (
          <CarouselContent
            section={section}
            position={position}
            key={section.title}
          />
        );
      })}
    </div>
  );
};

export default CarouselSlider;
