import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import Story from "../components/Story";
import EventDetails from "../components/EventDetails";

import Image from "next/image";
import { Contact } from "../components/Contact";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lupita & Max Wedding</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Story />
        <Divider />
        <EventDetails />
        <Divider />
        <Contact />
      </main>
    </>
  );
}
