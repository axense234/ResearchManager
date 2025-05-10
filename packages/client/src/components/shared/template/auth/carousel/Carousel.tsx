// React
import { FC } from "react";
// Components
import Logo from "@/components/shared/general/Logo";
import CarouselSlider from "./CarouselSlider";
import CarouselNavigation from "./CarouselNavigation";
// SCSS
import carouselStyles from "@/scss/components/shared/template/auth/carousel/Carousel.module.scss";
// Redux
import { useAppDispatch, useAppSelector, useAutoCarousel } from "@/hooks";
import { selectAllowAutoCarousel } from "@/redux/slices/general";
import {
  changeAllowAutoCarousel,
  handleAuthCarouselStepDirection,
} from "@/redux/slices/general/slice";

const Carousel: FC = () => {
  const dispatch = useAppDispatch();
  const allowAutoCarousel = useAppSelector(selectAllowAutoCarousel);

  useAutoCarousel(
    allowAutoCarousel,
    () => dispatch(handleAuthCarouselStepDirection({ direction: "right" })),
    () => dispatch(changeAllowAutoCarousel(true)),
  );
  return (
    <div className={carouselStyles.carouselContainer}>
      <Logo clickable={false} type="light" width={312} />
      <CarouselSlider />
      <CarouselNavigation />
    </div>
  );
};

export default Carousel;
