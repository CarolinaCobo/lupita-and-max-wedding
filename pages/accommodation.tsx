import { Button } from "../components/Button";
import { Contact } from "../components/Contact";
import { Container } from "../components/Container";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";

export default function Acommodation() {
  const t = useTranslations("Data");
  const places = [
    {
      name: "Radisson Blu",
      link: "https://www.radissonhotels.com/fr-fr/hotels/radisson-blu-nantes?facilitatorId=RHGSEM&cid=a:ps+b:ggl+c:emea+i:brand+e:rdb+d:ukirwe+r:brt+f:fr-FR+g:ho+h:FRNTE1+v:cf&gclid=CjwKCAiAvK2bBhB8EiwAZUbP1P9w0pREhEhCj5lQexTTTQ1LaNdAOLE7GIUJE9xWeHw5FBcEbnfZUhoCuy4QAvD_BwE&gclsrc=aw.ds",
      address: "6 Place Aristide Briand 44000 Nantes",
      description: t("radissonDescription"),
      phone: "+33 2 72 00 10 00",
      email: "info.nantes@radissonblu.com",
      direction: "https://goo.gl/maps/F6ToMkfae1Fj1xaJ9",
    },
    {
      name: "Sozo Hotel",
      link: "https://www.sozohotel.fr/fr/",
      address: "16 rue Frédéric Cailliaud 44000 Nantes",
      description: t("sozoDescription"),
      phone: "+33 2 51 82 40 00",
      email: "reception@sozohotel.fr",
      direction: "https://goo.gl/maps/dP3meuw15FnPdAPw5",
    },
    {
      name: "Seven Urban Suites Nantes Centre",
      link: "https://www.7urbansuites.fr/",
      address: "10, rue Konrad Adenauer 44200 Nantes",
      description: t("sevenUrbanDescription"),
      phone: "+33 2 51 72 97 00",
      email: "nantes@7urbansuites.fr",
      direction: "https://goo.gl/maps/9RSfLrQ6qKVoj4Yz8",
    },
    {
      name: "Okko Hotels",
      link: "https://www.okkohotels.com/fr/page/nantes/okko-hotels-nantes-chateau-accueil.3097.html?gclid=CjwKCAiAvK2bBhB8EiwAZUbP1NrO-50ZA62iHzbinOKy1-MW3ObNqEJqKLZhNG3dBXqsVMswHRS0LBoCRBAQAvD_BwE",
      address: "15 bis, rue de Strasbourg 44000 Nantes",
      description: t("okkoDescription"),
      phone: "+33 2 52 20 00 70",
      email: "nantes4401@okkohotels.com",
      direction: "https://goo.gl/maps/wUkagCjEsLQhfnkD7",
    },
    {
      name: "Océania Hotel de France",
      link: "https://www.oceaniahotels.com/fr/hotel/oceania-hotel-de-france-nantes",
      address: "24 Rue Crébillon 44000 Nantes",
      description: t("oceaniaDescription"),
      phone: "02 40 73 57 91",
      email: "",
      direction: "https://goo.gl/maps/znPb6TK6VzLeFnkf9",
    },
  ];
  return (
    <>
      <Header />
      <Divider />
      <Container className="pt-16 text-left">
        <div className="lg:order-first lg:row-span-2 ">
          <h1 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl">
            <span className="text-6xl">{t("accommodation")}</span>
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600">
            <p>{t("attractionsDescription")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-12">
          {places.map((place) => (
            <div
              key={place.name}
              className="relative flex items-center rounded-lg border bg-white px-6 py-5 shadow-sm "
            >
              <div className="min-w-0 flex-1">
                <Link href={place.link}>
                  <p className="text-md font-medium text-bouquet-600">
                    {place.name}
                  </p>
                </Link>
                <p className=" text-sm text-slate-600 my-2">
                  <Link href={`mailto:${place.email}`}>
                    <span className="font-bold ">{t("email")}: </span>
                    {place.email}
                  </Link>
                </p>
                <p className=" text-sm text-slate-600 my-2">
                  <span className="font-bold ">{t("address")}: </span>
                  {place.address}
                </p>

                <p className=" text-sm text-slate-600 my-2">
                  <Link href={`tel:${place.phone}`}>
                    <span className="font-bold ">{t("phone")}: </span>
                    {place.phone}
                  </Link>
                </p>

                <p className=" text-sm text-slate-600 my-2">
                  <span className="font-bold ">{t("description")}: </span>
                  {place.description}
                </p>
                <Button href={place.direction} name="Directions" />
              </div>
            </div>
          ))}
        </div>

        <h2 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl">
          <span className="text-6xl">{t("map")}</span>
        </h2>
        <div className="my-6 space-y-7 text-base text-slate-600">
          <p>{t("accomodationMapText")}</p>
        </div>

        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1E1HDIIe4kmZ5Ms1XsBumFkuVeTtm-Zw&ehbc=2E312F"
          width="100%"
          height="100%"
          className="aspect-[5/3] w-full mb-8"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

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
