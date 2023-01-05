import { Container } from "./Container";
import Link from "next/link";
import { Button } from "./Button";
import { useTranslations } from "next-intl";

export default function EventDetails() {
  const t = useTranslations("Data");

  return (
    <section id="program">
      <Container className="mt-8 sm:mt-16 mb-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl">
            <span className="text-6xl">{t("schedule")}</span>
          </h1>

          <div className="mt-6 space-y-7 text-base text-slate-600">
            <p>
              {t("scheduleText1")}
              <Link
                href="/accommodation"
                className="text-bouquet-600 hover:text-bouquet-700 font-bold"
              >
                {" "}
                {t("here")}
              </Link>
            </p>
            <p>
              {t("scheduleText2")}
              <Link
                href="/rsvp"
                className="text-bouquet-600 hover:text-bouquet-700 font-bold"
              >
                {" "}
                {t("here")}{" "}
              </Link>
              {t("scheduleText3")}
            </p>
          </div>

          <div className="mt-12 gap-1 sm:grid-cols-2 md:flex lg:grid  lg:grid-cols-2">
            <div>
              <Link
                href="https://goo.gl/maps/z5iQqu7WEU9TMS4F6"
                className="text-md font-medium text-bouquet-600 hover:underline hover:text-bouquet-500"
              >
                <h2 className="text-4xl mb-4 font-greatVibes text-bouquet-600">
                  {t("ceremony")}{" "}
                </h2>
              </Link>
              <h3 className="text-lg text-gray-900">
                <span className="font-medium">{t("where")}: </span>
                Eglise Saint-Nicolas
              </h3>
              <h3 className="text-lg text-gray-900">
                <span className="font-medium">{t("address")}: </span> Pl. Félix
                Fournier 44036 Nantes, France
              </h3>
              <h3 className="text-lg text-gray-900">
                <span className="font-medium">{t("time")}:</span>{" "}
                {t("ceremonyTime")}
              </h3>
              <Button
                href="https://goo.gl/maps/z5iQqu7WEU9TMS4F6"
                name={t("directions")}
              />
            </div>
            <div className=" sm:contents lg:relative lg:block lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.0837444635695!2d-1.559978084383041!3d47.21494367916059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eea7b470f58f%3A0x5bf4715bced996a7!2sPl.%20F%C3%A9lix%20Fournier%2C%2044036%20Nantes%2C%20France!5e0!3m2!1sen!2sie!4v1672698469597!5m2!1sen!2sie"
                width="100%"
                height="100%"
                loading="lazy"
                className="aspect-[4/3] w-full "
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="mt-12 gap-1 sm:grid-cols-2 md:flex lg:grid  lg:grid-cols-2">
            <div>
              <Link
                href="https://goo.gl/maps/ioQ3vCxqtce6FZ4aA"
                className="text-md font-medium text-bouquet-600 hover:underline hover:text-bouquet-500"
              >
                <h2 className="text-4xl mb-4 text-bouquet-600 font-greatVibes">
                  {t("reception")}
                </h2>
              </Link>

              <h3 className="text-lg text-gray-900">
                <span className="font-medium">{t("where")}:</span> Château de la
                Bretonnière
              </h3>
              <h3 className="text-lg text-gray-900">
                <span className="font-medium">{t("address")}:</span> Allée des
                Cèdres 44360 Vigneux de Bretagne
              </h3>
              <h3 className="text-lg  text-gray-900">
                <span className="font-medium">{t("time")}:</span>{" "}
                {t("receptionTime")}
              </h3>
              <Button
                href="https://goo.gl/maps/ioQ3vCxqtce6FZ4aA"
                name={t("directions")}
              />
            </div>
            <div className=" sm:contents lg:relative lg:block lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.970441376636!2d-1.7497130836581618!3d47.33444857916762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48058e4d05e437b5%3A0x918a65450bfcfa3b!2sCh%C3%A2teau%20de%20la%20Bretonni%C3%A8re!5e0!3m2!1sen!2sie!4v1672700033318!5m2!1sen!2sie"
                width="100%"
                height="100%"
                loading="lazy"
                className="aspect-[4/3] w-full "
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
