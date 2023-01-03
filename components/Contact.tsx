import Link from "next/link";
import { Container } from "./Container";
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import { SiWhatsapp } from "react-icons/si";

export const people = [
  {
    name: "Lupita",
    email: "lupita.suasti@gmail.com",
    phone: "+353 83 874 4750",
    whatsapp: "+353838744750",
  },
  {
    name: "Max",
    email: "maxime.cravignac@essca.eu",
    phone: "+34 613 04 73 87",
    whatsapp: "+34613047387",
  },
  {
    name: "Morgane (Wedding planner)",
    email: "md@my-daydream-wedding.com",
    phone: "+33768698909",
    whatsapp: "+33768698909",
  },
];

export function Contact() {
  return (
    <section id="contact" aria-label="contact">
      <Container className="mt-8 sm:mt-16 mb-8">
        <div className="lg:order-first lg:row-span-2">
          <h1 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl">
            <span className="text-6xl">Contact</span>
          </h1>

          <div className="mt-6 space-y-7 text-base text-slate-600">
            <p>
              If you need any help or have any questions please contact any of
              us
            </p>
          </div>
        </div>

        <ul
          role="list"
          className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="mb-8 space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                <div className="sm:col-span-2">
                  <div className="space-y-2">
                    <div className="space-y-1 font-medium font-greatVibes">
                      <p className="text-4xl">{person.name}</p>
                    </div>
                  </div>
                  <div>
                    <dl className="mt-4 text-base text-gray-500">
                      <Link
                        href={`mailto:${person.email}`}
                        className="flex items-center  text-bouquet-600 hover:text-bouquet-800 hover:underline hover:underline-offset-2"
                        aria-label="correo"
                      >
                        <HiEnvelope style={{ marginRight: 10 }} />
                        {person.email}
                      </Link>
                      <Link
                        href={`tel:${person.phone}`}
                        className="flex items-center text-bouquet-600 hover:text-bouquet-800 hover:underline hover:underline-offset-2 "
                        aria-label="phone"
                      >
                        <HiPhone style={{ marginRight: 10 }} />
                        {person.phone}
                      </Link>

                      <Link
                        href={`https://wa.me/${person.whatsapp}`}
                        className="flex  items-center text-bouquet-600 hover:text-bouquet-800 hover:underline hover:underline-offset-2"
                        aria-label="Whatsapp number"
                      >
                        <SiWhatsapp style={{ marginRight: 10 }} />
                        WhatsApp
                      </Link>
                    </dl>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
