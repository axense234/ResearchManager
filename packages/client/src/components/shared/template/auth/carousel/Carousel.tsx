// Interfaces
import { FC } from "react";
// Components
import Logo from "@/components/shared/general/Logo";
import AuthPageTemplateCarouselContent from "./CarouselContent";
import AuthPageTemplateCarouselNavigation from "./CarouselNavigation";

const AuthPageTemplateCarousel: FC = () => {
  return (
    <div className="authPageCarousel">
      <Logo clickable={false} type="light" width={256} />
      <AuthPageTemplateCarouselContent />
      <AuthPageTemplateCarouselNavigation />
    </div>
  );
};

export default AuthPageTemplateCarousel;
