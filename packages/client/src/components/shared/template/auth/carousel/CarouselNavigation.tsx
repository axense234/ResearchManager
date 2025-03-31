"use client";
// Interfaces
import { FC } from "react";
// SCSS
import carouselNavigationStyles from "@/scss/components/shared/template/auth/carousel/CarouselNavigation.module.scss";
// React Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Data
import {
  authCarouselContent,
  mainLightBlueColor,
  mainPastelRedColor,
  mainWhiteColor,
} from "@/data/static";
// Redux
import {
  changeAllowAutoCarousel,
  handleAuthCarouselStepDirection,
  setCurrentAuthCarouselId,
} from "@/redux/slices/general/slice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectCurrentAuthCarouselId } from "@/redux/slices/general";

const CarouselNavigation: FC = () => {
  const dispatch = useAppDispatch();
  const currentAuthCarouselId = useAppSelector(selectCurrentAuthCarouselId);

  return (
    <div className={carouselNavigationStyles.carouselNavigationContainer}>
      <FaChevronLeft
        title="Previous"
        aria-label="Previous"
        onClick={() => {
          dispatch(changeAllowAutoCarousel(false));
          dispatch(handleAuthCarouselStepDirection({ direction: "left" }));
        }}
      />
      <ul className={carouselNavigationStyles.carouselNavigationButtons}>
        {authCarouselContent.map((content) => {
          return (
            <li
              key={content.title}
              title={content.title}
              aria-label={content.title}
              style={{
                color:
                  content.id === currentAuthCarouselId
                    ? mainPastelRedColor
                    : mainWhiteColor,
              }}
              onClick={() => {
                dispatch(changeAllowAutoCarousel(false));
                dispatch(setCurrentAuthCarouselId(content.id));
              }}
            >
              {content.id}
            </li>
          );
        })}
      </ul>
      <FaChevronRight
        title="Next"
        aria-label="Next"
        onClick={() => {
          dispatch(changeAllowAutoCarousel(false));
          dispatch(handleAuthCarouselStepDirection({ direction: "right" }));
        }}
      />
    </div>
  );
};

export default CarouselNavigation;
