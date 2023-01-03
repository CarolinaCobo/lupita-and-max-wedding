import { Container } from "./Container";
import Link from "next/link";
import { Button } from "./Button";

export default function EventDetails() {
  return (
    <Container className="mt-8 sm:mt-16 mb-12">
      <div className="lg:order-first lg:row-span-2">
        <h1 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl">
          <span className="text-6xl">Schedule</span>
        </h1>

        <div className="mt-6 space-y-7 text-base text-slate-600">
          <p>
            The church is walkable from any of the accomodations in Nantes city
            recommended here.
          </p>
          <p>
            We will rent a bus that will be leaving at 17:00 from Nantes to the
            Château and back from the Château at 04:00. If you would like to
            come by bus please confirm here to count you in.
          </p>
        </div>

        <div className="mt-12 gap-1 sm:grid-cols-2 md:flex lg:grid  lg:grid-cols-2">
          <div>
            <Link
              href="https://goo.gl/maps/z5iQqu7WEU9TMS4F6"
              className="text-md font-medium text-bouquet-600 hover:underline hover:text-bouquet-500"
            >
              <h2 className="text-4xl mb-4 font-greatVibes text-bouquet-600">
                Ceremony{" "}
              </h2>
            </Link>
            <h3 className="text-lg text-gray-900">
              <span className="font-medium">Where: </span>
              Eglise Saint-Nicolas
            </h3>
            <h3 className="text-lg text-gray-900">
              <span className="font-medium">Address: </span> Pl. Félix Fournier
              44036 Nantes, France
            </h3>
            <h3 className="text-lg text-gray-900">
              <span className="font-medium">Time:</span> Saturday, July 1, 2023
              at 4:00 PM
            </h3>
            <Button
              href="https://goo.gl/maps/z5iQqu7WEU9TMS4F6"
              className=" bg-bouquet-500 my-4 text-white"
            >
              Directions
            </Button>
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
                Reception
              </h2>
            </Link>

            <h3 className="text-lg text-gray-900">
              <span className="font-medium">Where:</span> Allée des Cèdres 44360
              Château de la Bretonnière
            </h3>
            <h3 className="text-lg text-gray-900">
              <span className="font-medium">Address:</span> Allée des Cèdres
              44360 Vigneux de Bretagne
            </h3>
            <h3 className="text-lg  text-gray-900">
              <span className="font-medium">Time:</span> Saturday, July 1, 2023
              at 6:00 PM
            </h3>
            <Button
              href="https://goo.gl/maps/ioQ3vCxqtce6FZ4aA"
              className=" bg-bouquet-500 my-4 text-white"
            >
              Directions
            </Button>
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
  );
}
