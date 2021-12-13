import { HeaderSVG } from "components/organisms/HeaderSVG";
import { useLoginView } from "hooks/useLoginView";
import Head from "next/head";
import React from "react";
import BgDishes from "/public/bg-dishes.svg";

export default function AuthView({
  title,
  isFormView,
}: {
  title: string;
  isFormView: boolean;
}) {
  const { el, handleLoginView, getLoginView } = useLoginView();
  return (
    <div className="grid overflow-hidden relative self-center">
      <div ref={el} className="bg-dishes">
        <BgDishes />
      </div>

      <Head>
        <title>{title}</title>
        <meta name="description" content="Delicious Dishes" />
      </Head>
      <header className="h-screen grid justify-items-center content-center md:grid-cols-2 bg-dots">
        {!isFormView && (
          <div>
            <HeaderSVG loginView={getLoginView} goToLogin={handleLoginView} />
          </div>
        )}
        <div className="self-end md:self-center mt-8">
          <h1 className="text-center font-semibold">
            <div className="md:text-6xl text-4xl">Delicious</div>
            <div className="md:text-9xl text-7xl">Dishes</div>
          </h1>
        </div>
      </header>
    </div>
  );
}
