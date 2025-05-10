// React
import { FC } from "react";
// SCSS
import carouselContentStyles from "@/scss/components/shared/template/auth/carousel/CarouselContent.module.scss";
// Interfaces
import { CarouselContentProps } from "@/core/interfaces";

const CarouselContent: FC<CarouselContentProps> = ({ section, position }) => {
  return (
    <div className={carouselContentStyles.carouselContentContainer}>
      <h4 className={position}>STEP {section.id}</h4>
      <div
        className={`${carouselContentStyles.carouselContentInfo} ${position}`}
      >
        <h6>{section.title}</h6>
        <p>{section.description}</p>
      </div>
    </div>
  );
};

export default CarouselContent;
