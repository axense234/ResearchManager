// React
import { FC } from "react";
// SCSS
import carouselNavigationStyles from "@/scss/components/shared/template/auth/carousel/CarouselNavigation.module.scss";
// Components
import NavButton from "@/components/shared/general/NavButton";
// Data
import { mainPastelRedColor, mainWhiteColor } from "@/data/general";
import { authCarouselContent } from "@/data/general/components";
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
      <NavButton
        direction="prev"
        showButton={true}
        onNavButtonClick={() => {
          dispatch(changeAllowAutoCarousel(false));
          dispatch(handleAuthCarouselStepDirection({ direction: "left" }));
        }}
        type="light"
        size="small"
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
      <NavButton
        direction="next"
        showButton={true}
        onNavButtonClick={() => {
          dispatch(changeAllowAutoCarousel(false));
          dispatch(handleAuthCarouselStepDirection({ direction: "right" }));
        }}
        type="light"
        size="small"
      />
    </div>
  );
};

export default CarouselNavigation;
