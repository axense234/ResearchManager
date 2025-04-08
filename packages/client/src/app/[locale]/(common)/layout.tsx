"use client";
// Components
import Sidebar from "@/components/layout/sidebar/Sidebar";
import LanguageSwitcher from "@/components/shared/general/language/LanguageSwitcher";
import GeneralModal from "@/components/shared/modal/GeneralModal";
import EntityImagesOverlay from "@/components/shared/overlay/entity/EntityImagesOverlay";
// Redux and Custom Hooks
import { useCreateUserOAuthTrigger } from "@/hooks";
// ChartTS
import { LineElement, PointElement, BarElement, ArcElement } from "chart.js";
import { Chart } from "chart.js/auto";

const SpecialLayout = ({ children }: { children: React.ReactNode }) => {
  Chart.register([LineElement, PointElement, BarElement, ArcElement]);

  useCreateUserOAuthTrigger();

  return (
    <>
      <Sidebar />
      <GeneralModal type="general" />
      <LanguageSwitcher position="absolute" />
      {children}
    </>
  );
};

export default SpecialLayout;
