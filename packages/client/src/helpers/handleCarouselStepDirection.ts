export const handleCarouselStepDirection = (
  direction: "left" | "right",
  currentCarouselId: number,
  maxSizeOfCarousel: number,
) => {
  let newCarouselId = currentCarouselId;
  if (direction === "left") {
    newCarouselId =
      currentCarouselId - 1 < 1 ? maxSizeOfCarousel : currentCarouselId - 1;
  } else if (direction === "right") {
    newCarouselId =
      currentCarouselId + 1 > maxSizeOfCarousel ? 1 : currentCarouselId + 1;
  }
  return newCarouselId;
};
