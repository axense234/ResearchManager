"use client";
// Components
import LanguageSwitcher from "@/components/shared/general/language/LanguageSwitcher";
import GeneralModal from "@/components/shared/modal/GeneralModal";
import SideBar from "@/components/layout/sidebar/SideBar";
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
      <SideBar />
      <GeneralModal type="general" />
      <LanguageSwitcher position="absolute" />
      {children}
    </>
  );
};

export default SpecialLayout;
