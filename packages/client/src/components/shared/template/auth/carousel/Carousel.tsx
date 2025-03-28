// Interfaces
import { FC } from "react";
// Components
import Logo from "@/components/shared/general/Logo";
import CarouselContent from "./CarouselContent";
import CarouselNavigation from "./CarouselNavigation";

const Carousel: FC = () => {
  return (
    <div className="authPageCarousel">
      <Logo clickable={false} type="light" width={256} />
      <CarouselContent />
      <CarouselNavigation />
    </div>
  );
};

export default Carousel;
