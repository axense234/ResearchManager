// React
import { FC } from "react";
// SCSS
import homeExamplesStyles from "@/scss/components/page/home/examples/HomeExamples.module.scss";
// Components
import EntityView from "@/components/shared/entity/view/EntityView";
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";
// Data
import { homeExamplesData } from "@/data/general/home";
// Redux
import { useAppSelector } from "@/hooks";
import { selectResearchActivitiesExamples } from "@/redux/slices/research/activity";

const HomeExamples: FC = () => {
  const researchActivitiesExamplesIds = useAppSelector(
    selectResearchActivitiesExamples,
  ).map((example) => example.id);

  return (
    <section className={homeExamplesStyles.homeExamplesContainer}>
      <PageSectionTitle
        title={homeExamplesData.title}
        description={homeExamplesData.description}
      />
      <EntityView
        entityType="researchActivity"
        viewType="example"
        entitiesIds={researchActivitiesExamplesIds}
        darkMode={true}
        isLoading={false}
      />
    </section>
  );
};

export default HomeExamples;
