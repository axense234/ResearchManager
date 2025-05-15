// React
import { MutableRefObject, useEffect } from "react";

export const useHandleScrollToActivityDay = (
  currentActivityDayId: string,
  activityDayId: string,
  activityDayRef: MutableRefObject<HTMLDivElement>,
  activityDaysContainerRef: MutableRefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    if (
      currentActivityDayId === activityDayId &&
      activityDayRef.current &&
      activityDaysContainerRef.current
    ) {
      const scrollPosition =
        activityDayRef.current.offsetTop -
        activityDaysContainerRef.current.offsetTop;

      activityDaysContainerRef.current.scrollTo({
        // Dont want it to stick that close to the top thats why the - 32 is there
        top: scrollPosition - 32,
        behavior: "smooth",
      });
    }
  }, [currentActivityDayId]);
};
