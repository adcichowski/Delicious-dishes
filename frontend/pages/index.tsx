import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeaderImg from "../public/girl-with-fruits.svg";
const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-col align-center">
      <Head>
        <title>Delicious Dishes - przepisy na smak</title>
        <meta name="description" content="Delicious Dishes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-wrap flex-col content-center">
        <h1 className="text-center font-semibold">
          <p className="text-4xl">Delicious</p>
          <p className="text-7xl">Dishes</p>
        </h1>
        <HeaderImg />
      </header>
    </div>
  );
};

export default Home;
