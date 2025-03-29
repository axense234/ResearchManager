"use client";
// Interfaces
import { FC } from "react";
// SCSS
import carouselContentStyles from "@/scss/components/shared/template/auth/carousel/CarouselContent.module.scss";
// Redux
import { useAppSelector } from "@/hooks";
import { selectCurrentAuthCarouselId } from "@/redux/slices/general";
// Data
import { authCarouselContent } from "@/data/static";

const CarouselContent: FC = () => {
  const currentAuthCarouselId = useAppSelector(selectCurrentAuthCarouselId);

  const { id, title, description } =
    authCarouselContent[currentAuthCarouselId - 1];

  return (
    <div className={carouselContentStyles.carouselContentContainer}>
      <h4>STEP {id}</h4>
      <div className={carouselContentStyles.carouselContentInfo}>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CarouselContent;
