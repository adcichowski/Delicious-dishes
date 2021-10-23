import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Button } from "../components/atoms/Button";
import HeaderImg from "../public/girl-with-fruits.svg";
const Home: NextPage = () => {
  return (
    <div className="flex flex-col max-w-full bg-dishes align-center justify-center">
      <Head>
        <title>Delicious Dishes - przepisy na smak</title>
        <meta name="description" content="Delicious Dishes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-screen flex flex-col justify-center items-center md:grid md:grid-cols-2">
        <h1 className="block text-center bg-dishes-dekstop content-center font-semibold">
          <div className="bg-dishes-desktop">
            <p className="md:text-6xl text-3xl">Delicious</p>
            <p className="md:text-9xl text-6xl">Dishes</p>
          </div>
        </h1>

        <div className="grid place-items-center">
          <div className="w-96 h-96 md:w-4/6 md:h-auto">
            <HeaderImg />
          </div>
          <Button className={"w-28 text-xl mt-5"}>Start</Button>
        </div>
      </header>
    </div>
  );
};

export default Home;
