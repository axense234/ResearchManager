// React
import { useEffect } from "react";
// Data
import {
  AUTO_SLIDER_FREQUENCY,
  AUTO_SLIDER_DELAY,
  AUTO_SLIDER_RESTART,
} from "@/data/static";

export const useAutoCarousel = (
  allowAutoCarousel: boolean,
  handleNextIncrement: () => void,
  setAllowAutoCarousel: () => void,
) => {
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (allowAutoCarousel) {
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          handleNextIncrement();
        }, AUTO_SLIDER_FREQUENCY);
      }, AUTO_SLIDER_DELAY);
    }
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [AUTO_SLIDER_DELAY, AUTO_SLIDER_FREQUENCY, allowAutoCarousel]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!allowAutoCarousel) {
      timeout = setTimeout(() => {
        setAllowAutoCarousel();
      }, AUTO_SLIDER_RESTART);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [AUTO_SLIDER_RESTART, setAllowAutoCarousel, allowAutoCarousel]);
};
