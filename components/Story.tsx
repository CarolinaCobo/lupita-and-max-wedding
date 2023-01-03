import Image from "next/image";

import { Container } from "./Container";

export default function Story() {
  return (
    <Container className="mt-16 sm:mt-32 mb-8">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-md px-2.5  lg:max-w-none ">
            <Image
              src={"/story-img.jpeg"}
              alt=""
              width={"800"}
              height={"300"}
              className="aspect-square rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800  sm:text-5xl font-greatVibes">
            <span className="text-6xl"> Once again, yes</span>
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600">
            <p>
              After saying{" "}
              <span className=" text-bold text-bouquet-600 ">yes</span> to each
              other in 2017, we are finally celebrating our love surrounded by
              our families and friends.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p>
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really <em>can</em> make
              it to orbit — from the comfort of their own backyards.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
