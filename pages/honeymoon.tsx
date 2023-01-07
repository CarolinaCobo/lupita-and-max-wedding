import { Button } from "../components/Button";
import { Contact } from "../components/Contact";
import { Container } from "../components/Container";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";

export default function Honeymoon() {
  const t = useTranslations("Data");

  const activities = [
    {
      title: t("flightsTitle"),
      link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/250000",
      image: "/plane.jpeg",
      amount: "€3000",
      description: t("flightsText"),
    },
    {
      title: t("accommodation"),
      link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/150000",
      image: "/hotel.jpeg",
      amount: "€1500",
      description: t("accomodationText"),
    },
    {
      title: t("foodForLupi"),
      link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/40000",
      image: "/food.jpeg",
      amount: "€400",
      description: t("foodForLupiText"),
    },
    {
      title: t("transport"),
      link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/100000",
      image: "/transport.jpeg",
      amount: "€1000",
      description: t("transportText"),
    },
    {
      title: t("themeParkTitle"),
      link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/100000",
      image: "/theme-park.jpeg",
      amount: "€1000",
      description: t("themeParkText"),
    },
  ];

  return (
    <>
      <Header />
      <Divider />
      <Container className="pt-16 text-left ">
        <div className="lg:order-first lg:row-span-2 ">
          <h1 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl">
            <span className="text-6xl">Honeymoon</span>
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600">
            <p>{t("honeymoonText1")}</p>
            <p>{t("honeymoonText2")}</p>
            <p>{t("honeymoonText3")}</p>

            <div className="mt-6 space-y-7 text-base text-slate-600">
              <p>
                {t("honeymoonText4")}
                <Link
                  href="https://www.leetchi.com/c/honeymoon-in-japan-maxlupi"
                  className="text-bouquet-600 hover:text-bouquet-700 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {t("here")}.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={activity.image}
                  alt="activity image"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <span className="inline-flex items-center rounded-full bg-bouquet-400 px-3 py-0.5 text-sm font-medium text-white">
                    {activity.amount}
                  </span>
                  <a href={activity.link} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {activity.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {activity.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center ">
                  <div className="flex-shrink-0">
                    <Button
                      href={activity.link}
                      name={t("participate")}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </Container>
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
