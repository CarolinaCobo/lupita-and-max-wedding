import { GetStaticPropsContext } from "next";
import { Contact } from "../components/Contact";
import { Container } from "../components/Container";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslations } from "next-intl";
import Link from "next/link";

const places = [
  {
    name: "Jardin des Plantes",
    link: "https://www.parcsetjardins.fr/jardins/719-jardin-des-plantes-de-nantes",
    description:
      "With 7 hectares of greenery in the city center, more than 10,000 living species, 800 square meters of greenhouses and more than 50,000 flowers planted each season, the Jardin des Plantes de Nantes, labeled Remarkable Garden, is one of the four major botanical gardens in France.",
  },
  {
    name: "Les Machines de l'Ile ",
    link: "https://www.lesmachines-nantes.fr/en/",
    description:
      "The visit of the Machines of the Island plunges you into a dreamlike world that Jules Verne and Leonardo da Vinci would certainly have appreciated. The former Nantes shipyard district on the banks of the Loire has been invaded by strange creatures. To discover the three worlds of the Machines de l'île in Nantes, allow half a day. Between the Gallery of Machines, the Carousel of the Marine Worlds, and the Grand Elephant trip, you won't see the hours pass.",
  },
  {
    name: "Le Passage Pommeraye",
    link: "http://www.passagepommeraye.fr/",
    description:
      "Visit one of the most beautiful covered passages in Europe, a true architectural masterpiece of the 19th century. Discover its history, its richly decorated galleries, its shops.",
  },
  {
    name: "Le Château des Ducs de Bretagne",
    link: "https://www.chateaunantes.fr/en/",
    description:
      "In the heart of the medieval quarter of Nantes, discover the Castle of the Dukes of Brittany, an emblematic site of the city, built at the end of the 15th century by François II and his daughter Anne de Bretagne.",
  },
  {
    name: "Le Voyage à Nantes",
    link: "https://www.levoyageanantes.fr/en/",
    description:
      "A journey to the heart of a unique collection of more than 100 works of art in the public space revealing a cultural and historical heritage. Just follow the green line for a surprising and exciting visit !",
  },
  {
    name: "La Cathédrale de Saint-Pierre et Saint-Paul",
    link: "https://cathedrale-nantes.fr/",
    description:
      "The Cathedral of Saint-Pierre-et-Saint-Paul de Nantes is a Catholic cathedral located in Place Saint-Pierre, in Nantes",
  },
  {
    name: "Le Jardin de l'Ile de Versailles",
    link: "https://www.levoyageanantes.fr/lieux/ile-de-versailles/",
    description:
      "Place of relaxation and leisure since its development, the island of Versailles was originally a marsh. The heart of the island is home to a Japanese-inspired tea garden. It reveals to the walker landscape paintings that are renewed step by step and over the seasons. The landscape recreated and structured by rock gardens, waterfalls and ponds is richly planted with exotic plants such as bamboo, bald cypress, rhododendron, camellia and Japanese cherry trees.",
  },
  {
    name: "Nantes Art Museum",
    link: "https://museedartsdenantes.nantesmetropole.fr/en/home.html",
    description:
      "Gentileschi, La Tour, Watteau, Delacroix, Ingres, Monet, Kandinsky, Soulages, Duane Hanson, Bill Viola... the Nantes Art Museum exhibits many internationally renowned artists and each period artistic account of sumptuous masterpieces. In ancient art, let us quote for example Le Songe by Joseph by Georges de La Tour.",
  },
  {
    name: "Natural History Museum",
    link: "https://museum.nantesmetropole.fr/version-anglaise.html",
    description:
      "The museum of Nantes is made up of an important scientific heritage, placing it among the first in France, in number of specimens.",
  },
  {
    name: "Village of Trentemoult",
    link: "https://www.levoyageanantes.fr/en/to-see/the-endless-journey/the-districts-of-nantes/trentemoult/",
    description:
      "Neighbor to Nantes the city dweller thanks to a river connection synonymous with adventure with a capital A despite the short duration of the journey, Trentemoult offers a guaranteed change of scenery and a spatiotemporal and colorful bubble where it is always good to get lost without any specific goal.",
  },
];

export default function Attractions() {
  const t = useTranslations("Data");

  const places = [
    {
      name: "Jardin des Plantes",
      link: "https://www.parcsetjardins.fr/jardins/719-jardin-des-plantes-de-nantes",
      description: t("jardinDesPlantesDescription"),
    },
    {
      name: "Les Machines de l'Ile ",
      link: "https://www.lesmachines-nantes.fr/en/",
      description: t("machinesDeLileDescription"),
    },
    {
      name: "Le Passage Pommeraye",
      link: "http://www.passagepommeraye.fr/",
      description: t("passagePomeraye"),
    },
    {
      name: "Le Château des Ducs de Bretagne",
      link: "https://www.chateaunantes.fr/en/",
      description: t("chateauDesDucsDescription"),
    },
    {
      name: "Le Voyage à Nantes",
      link: "https://www.levoyageanantes.fr/en/",
      description: t("voyageDescription"),
    },
    {
      name: "La Cathédrale de Saint-Pierre et Saint-Paul",
      link: "https://cathedrale-nantes.fr/",
      description: t("cathedralDescription"),
    },
    {
      name: "Le Jardin de l'Ile de Versailles",
      link: "https://jardins.nantes.fr/En/Garden/Parks-Gardens/Garden-Description.asp?Rcs=120&P=/En/Garden/Parks-Gardens/List/List-Garden-Search.asp",
      description: t("jardinDeLilleDescription"),
    },
    {
      name: "Nantes Art Museum",
      link: "https://museedartsdenantes.nantesmetropole.fr/en/home.html",
      description: t("artMuseumDescription"),
    },
    {
      name: "Natural History Museum",
      link: "https://museum.nantesmetropole.fr/version-anglaise.html",
      description: t("naturalHistoryMuseumDescription"),
    },
    {
      name: "Village of Trentemoult",
      link: "https://www.levoyageanantes.fr/en/to-see/the-endless-journey/the-districts-of-nantes/trentemoult/",
      description: t("trentemoultDescription"),
    },
  ];
  return (
    <>
      <Header />
      <Divider />
      <Container className="pt-16 text-left">
        <div className="lg:order-first lg:row-span-2 ">
          <h1 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl">
            <span className="text-6xl">{t("attractions")}</span>
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600">
            <p>{t("attractionsDescription")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-12">
          {places.map((place) => (
            <div
              key={place.link}
              className="relative flex items-center space-x-3 rounded-lg border bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-bouquet-500 focus-within:ring-offset-2 hover:border-bouquet-400"
            >
              <div className="min-w-0 flex-1">
                <Link
                  href={place.link}
                  className="focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-bouquet-600">
                    {place.name}
                  </p>
                  <p className=" text-sm text-gray-500">{place.description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl">
          <span className="text-6xl">{t("map")}</span>
        </h2>
        <div className="my-6 space-y-7 text-base text-slate-600">
          <p>{t("mapText")}</p>
        </div>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1Mjrh10iekRx6zNtbEmNH5rLbdl37ot0&ehbc=2E312F"
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
