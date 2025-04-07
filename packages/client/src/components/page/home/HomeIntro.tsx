"use client";
// Interfaces
import { FC } from "react";
// SCSS
import homeIntroStyles from "@/scss/components/page/home/HomeIntro.module.scss";
// Components
import Logo from "@/components/shared/general/Logo";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import HomeSectionTitle from "./shared/HomeSectionTitle";
// Data
import { homeIntroData } from "@/data/general/home";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectUserProfile } from "@/redux/slices/general";

const HomeIntro: FC = () => {
  const dispatch = useAppDispatch();

  const profile = useAppSelector(selectUserProfile);

  const isFunctionalButtonDisabled = profile.email.length <= 0;

  return (
    <section className={homeIntroStyles.homeIntroContainer}>
      <Logo clickable={false} type="light" width={256} />
      <HomeSectionTitle
        title={homeIntroData.title}
        description={homeIntroData.description}
      />
      <FunctionalButton
        content="Create Research Activity"
        disabled={isFunctionalButtonDisabled}
        onHoverContent="Create Research Activity"
        onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
        onClickFunction={() => dispatch(() => {})}
      />
    </section>
  );
};

export default HomeIntro;
