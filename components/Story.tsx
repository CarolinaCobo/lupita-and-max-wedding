import Image from "next/image";
import { Container } from "./Container";
import { useTranslations } from "next-intl";

export default function Story() {
  const t = useTranslations("Data");

  return (
    <Container className="mt-16 sm:mt-32 mb-8">
      <div className="grid grid-cols-1 gap-y-16 item lg:grid-cols-2 lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-md px-2.5 lg:max-w-none ">
            <Image
              src={"/story-img3.jpeg"}
              alt="lupi and max"
              width={"800"}
              height={"300"}
              className="md:aspect-square rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold text-slate-800  sm:text-5xl font-greatVibes">
            <span className="text-6xl">{t("yesAgain")}</span>
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600">
            <p>{t("ourStory1")}</p>
            <p>{t("ourStory2")}</p>
            <p>{t("ourStory3")}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
