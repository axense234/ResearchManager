"use client";
// Interfaces
import { FC } from "react";
// SCSS
import carouselNavigationStyles from "@/scss/components/shared/template/auth/carousel/CarouselNavigation.module.scss";
// React Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Data
import { authCarouselContent } from "@/data/static";
// Redux
import {
  handleAuthCarouselStepDirection,
  setCurrentAuthCarouselId,
} from "@/redux/slices/general/slice";
import { useAppDispatch } from "@/hooks";

const CarouselNavigation: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={carouselNavigationStyles.carouselNavigationContainer}>
      <FaChevronLeft
        title="Previous"
        aria-label="Previous"
        onClick={() =>
          dispatch(handleAuthCarouselStepDirection({ direction: "left" }))
        }
      />
      <ul className={carouselNavigationStyles.carouselNavigationButtons}>
        {authCarouselContent.map((content) => {
          return (
            <li
              key={content.title}
              title={content.title}
              aria-label={content.title}
              onClick={() => dispatch(setCurrentAuthCarouselId(content.id))}
            >
              {content.id}
            </li>
          );
        })}
      </ul>
      <FaChevronRight
        title="Next"
        aria-label="Next"
        onClick={() =>
          dispatch(handleAuthCarouselStepDirection({ direction: "right" }))
        }
      />
    </div>
  );
};

export default CarouselNavigation;
