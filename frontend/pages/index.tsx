import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { HeaderSVG } from "../components/atoms/HeaderSVG";
import { Login } from "../components/organisms/Login";
import BgDishes from "/public/bg-dishes.svg";
import { useLoginView } from "../hooks/useLoginView";
const Home: NextPage = () => {
  const { el, handleLoginView, getLoginView } = useLoginView();
  return (
    <div className="grid overflow-hidden relative self-center">
      <div ref={el} className="bg-dishes">
        <BgDishes />
      </div>

      <Head>
        <title>Delicious Dishes - przepisy na smak</title>
        <meta name="description" content="Delicious Dishes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-screen grid justify-items-center content-center md:grid-cols-2">
        <div>
          {getLoginView !== "Login" ? (
            <HeaderSVG loginView={getLoginView} goToLogin={handleLoginView} />
          ) : (
            <Login />
          )}
        </div>
        <div className="self-end md:self-center mt-8">
          <h1 className="text-center font-semibold">
            <div className="md:text-6xl text-4xl">Delicious</div>
            <div className="md:text-9xl text-7xl">Dishes</div>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Home;
