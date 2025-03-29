// Interfaces
import { FC } from "react";
// Components
import Logo from "@/components/shared/general/Logo";
import CarouselContent from "./CarouselContent";
import CarouselNavigation from "./CarouselNavigation";
// SCSS
import carouselStyles from "@/scss/components/shared/template/auth/carousel/Carousel.module.scss";

const Carousel: FC = () => {
  return (
    <div className={carouselStyles.carouselContainer}>
      <Logo clickable={false} type="light" width={256} />
      <CarouselContent />
      <CarouselNavigation />
    </div>
  );
};

export default Carousel;
