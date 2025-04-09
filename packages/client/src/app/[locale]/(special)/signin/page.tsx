"use client";
// Components
import AuthPageTemplate from "@/components/shared/template/auth/AuthPageTemplate";
// Hooks
import { useAuthorization } from "@/hooks/general/useAuthorization";

const Signin = () => {
  useAuthorization();
  return <AuthPageTemplate type="signin" />;
};

export default Signin;
