"use client";
// Redux and Custom Hooks
import { useAppDispatch, useCreateUserOAuthTrigger } from "@/hooks";

const SpecialLayout = ({ children }: { children: React.ReactNode }) => {
  useCreateUserOAuthTrigger();

  return <div>{children}</div>;
};

export default SpecialLayout;
