import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { HeaderSVG } from "../components/atoms/HeaderSVG";
import { Login } from "../components/Login";
import BgDishes from "/public/bg-dishes.svg";
const Home: NextPage = () => {
  const [getLoginView, setLoginView] = React.useState("Start");
  const handleLoginView = () => {
    setLoginView("Process");
    setTimeout(() => {
      console.log("set login");
      setLoginView("Login");
    }, 2000);
  };
  return (
    <div className="flex flex-col max-w-full align-center justify-center overflow-hidden relative">
      <div className="bg-dishes">
        <BgDishes />
      </div>

      <Head>
        <title>Delicious Dishes - przepisy na smak</title>
        <meta name="description" content="Delicious Dishes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-screen flex flex-col justify-center items-center md:grid md:grid-cols-2">
        <h1 className="block text-center content-center font-semibold">
          <div>
            <div className="md:text-6xl text-3xl">Delicious</div>
            <div className="md:text-9xl text-6xl">Dishes</div>
          </div>
        </h1>
        <div>
          {getLoginView !== "Login" ? (
            <HeaderSVG loginView={getLoginView} goToLogin={handleLoginView} />
          ) : (
            <Login />
          )}
        </div>
      </header>
    </div>
  );
};

export default Home;
