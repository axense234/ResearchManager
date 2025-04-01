"use client";
// Interfaces
import { FC } from "react";
// Data
import { homeExamplesDescriptions } from "@/data/static";
// SCSS
import homeExamplesStyles from "@/scss/components/page/home/HomeExamples.module.scss";
// Components
import EntityContainer from "@/components/shared/entity/container/EntityContainer";

const HomeExamples: FC = () => {
  return (
    <section className={homeExamplesStyles.homeExamplesContainer}>
      <div className={homeExamplesStyles.homeExamplesDetails}>
        <h3>Research Activity Examples</h3>
        <div className={homeExamplesStyles.homeExamplesDescription}>
          <p>{homeExamplesDescriptions[0]}</p>
          <p>{homeExamplesDescriptions[1]}</p>
        </div>
      </div>
      <EntityContainer entityType="researchActivity" containerType="example" />
    </section>
  );
};

export default HomeExamples;
