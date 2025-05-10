"use client";
// Components
import LanguageSwitcher from "@/components/shared/general/language/LanguageSwitcher";
import GeneralModal from "@/components/shared/modal/GeneralModal";
import SideBar from "@/components/layout/sidebar/SideBar";
import UpsertEntityOverlay from "@/components/shared/overlay/entity/operations/upsert/UpsertEntityOverlay";
import EntityImagesOverlay from "@/components/shared/overlay/entity/images/EntityImagesOverlay";
import DeleteEntityOverlay from "@/components/shared/overlay/entity/operations/delete/DeleteEntityOverlay";
import UpsertTagOverlayInterface from "@/components/shared/overlay/entity/operations/upsert/interfaces/UpsertTagOverlayInterface";
// Redux and Custom Hooks
import { useCreateUserOAuthTrigger } from "@/hooks";
// ChartTS
import { Chart } from "chart.js/auto";
import { LineElement, PointElement, BarElement, ArcElement } from "chart.js";

const SpecialLayout = ({ children }: { children: React.ReactNode }) => {
  Chart.register([LineElement, PointElement, BarElement, ArcElement]);

  useCreateUserOAuthTrigger();

  return (
    <>
      {/* Main */}
      <SideBar />
      {/* Overlays */}
      <UpsertEntityOverlay />
      <UpsertTagOverlayInterface />
      <DeleteEntityOverlay />
      <EntityImagesOverlay specialEntityType="researchActivity" />
      {/* Modals */}
      <GeneralModal type="general" />
      {/* Fixed */}
      <LanguageSwitcher position="absolute" />
      {children}
    </>
  );
};

export default SpecialLayout;
