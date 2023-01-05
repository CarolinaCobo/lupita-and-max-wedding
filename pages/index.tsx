import Head from "next/head";
import { Hero } from "../components/Hero";
import Story from "../components/Story";
import EventDetails from "../components/EventDetails";
import { Contact } from "../components/Contact";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GetStaticPropsContext } from "next";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lupita & Max Wedding</title>
        <meta
          name="description"
          content="Lupita and Max's wedding | 01/07/2023"
        />
        <meta key="og:image" property="og:image" content="/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Divider />
        <Story />
        <Divider />
        <EventDetails />
        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </main>
    </>
  );
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
