// Interfaces
import { FC } from "react";
// SCSS
import carouselContainerStyles from "@/scss/components/shared/template/auth/carousel/CarouselContainer.module.scss";
// Components
import Carousel from "./Carousel";

const CarouselContainer: FC = () => {
  return (
    <div className={carouselContainerStyles.carouselContainer}>
      <Carousel />
    </div>
  );
};

export default CarouselContainer;
