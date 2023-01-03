import Image from "next/image";

import { Container } from "./Container";

export default function Story() {
  return (
    <Container className="mt-16 sm:mt-32 mb-8">
      <div className="grid grid-cols-1 gap-y-16 item lg:grid-cols-2 lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-md px-2.5 lg:max-w-none ">
            <Image
              src={"/story-img.jpeg"}
              alt="lupi and max"
              width={"800"}
              height={"300"}
              className="md:aspect-square rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold text-slate-800  sm:text-5xl font-greatVibes">
            <span className="text-6xl"> Once again, yes</span>
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600">
            <p>
              After saying{" "}
              <span className=" text-bold text-bouquet-600 ">yes</span> to each
              other in 2017, and being together for 8 years together we get to
              finally have this celebration with all our loved ones.
            </p>
            <p>
              As you all know we met while studying in Angers, of all places,
              and we got the chance to spend more time together in Mexico while
              finishing our studies.
            </p>
            <p>
              Luckily, we always had the support and help from our parents, who
              made it possible for us to stay together and eventually move in to
              Dublin. This is one of the many reasons why we’re looking forward
              to celebrate with our parents and all of you, as you’re so
              important to the both of us and have made our dream possible one
              way or another.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
