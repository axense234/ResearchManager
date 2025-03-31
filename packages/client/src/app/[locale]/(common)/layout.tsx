"use client";
import Sidebar from "@/components/layout/sidebar/Sidebar";
// Redux and Custom Hooks
import { useCreateUserOAuthTrigger } from "@/hooks";

const SpecialLayout = ({ children }: { children: React.ReactNode }) => {
  useCreateUserOAuthTrigger();

  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default SpecialLayout;
