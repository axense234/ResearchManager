// React
import { useEffect } from "react";
// Data
import {
  AUTO_SLIDER_FREQUENCY,
  AUTO_SLIDER_DELAY,
  AUTO_SLIDER_RESTART,
} from "@/data/general";

export const useAutoCarousel = (
  allowAutoCarousel: boolean,
  handleNextIncrement: () => void,
  setAllowAutoCarousel?: () => void,
  sliderDelay?: number,
  sliderFrequency?: number,
  sliderRestartDelay?: number,
) => {
  const carouselDelay = sliderDelay || AUTO_SLIDER_DELAY;
  const carouselFrequency = sliderFrequency || AUTO_SLIDER_FREQUENCY;
  const carouselRestart = sliderRestartDelay || AUTO_SLIDER_RESTART;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (allowAutoCarousel) {
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          handleNextIncrement();
        }, carouselFrequency);
      }, carouselDelay);
    }
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [carouselDelay, carouselFrequency, allowAutoCarousel]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!allowAutoCarousel) {
      timeout = setTimeout(() => {
        setAllowAutoCarousel();
      }, carouselRestart);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [carouselRestart, setAllowAutoCarousel, allowAutoCarousel]);
};
