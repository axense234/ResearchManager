// Interfaces
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
import {
  selectCurrentResearchActivityExampleIndex,
  selectResearchActivityExampleIdByIndex,
} from "@/redux/slices/research/activity";

const HomeExamples: FC = () => {
  const currentResearchActivityExampleIndex = useAppSelector(
    selectCurrentResearchActivityExampleIndex,
  );
  const researchActivityExampleId = useAppSelector((state) =>
    selectResearchActivityExampleIdByIndex(
      state,
      currentResearchActivityExampleIndex,
    ),
  );

  return (
    <section className={homeExamplesStyles.homeExamplesContainer}>
      <PageSectionTitle
        title={homeExamplesData.title}
        description={homeExamplesData.description}
      />
      <EntityView
        entityType="researchActivity"
        viewType="example"
        entityId={researchActivityExampleId}
      />
    </section>
  );
};

export default HomeExamples;
