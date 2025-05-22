// React
import { FC } from "react";
// SCSS
import dashboardPageStyles from "@/scss/components/page/dashboard/DashboardPage.module.scss";
// Components
import Footer from "@/components/layout/footer/Footer";
import DashboardDescription from "./description/DashboardDescription";
import EntityResearchActivities from "@/components/shared/entity/EntityResearchActivities";
import EntityResearchPhases from "@/components/shared/entity/EntityResearchPhases";
import EntityTags from "@/components/shared/entity/EntityTags";

const DashboardPage: FC = () => {
  return (
    <section className={dashboardPageStyles.dashboardPageContainer}>
      <DashboardDescription />
      <EntityResearchActivities pageType="dashboard" />
      <EntityResearchPhases pageType="dashboard" />
      <EntityTags pageType="dashboard" />
      <Footer />
    </section>
  );
};

export default DashboardPage;
