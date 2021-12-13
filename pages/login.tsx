import { FormAuthView } from "components/organisms/FormAuthView";
import AuthView from "components/templates/AuthView";
import { useRouter } from "next/router";
import React from "react";
export default function Login() {
  const router = useRouter();

  return (
    <AuthView isFormView={true} title={"Delicious Dishes - Zaloguj się !"} />
  );
}
