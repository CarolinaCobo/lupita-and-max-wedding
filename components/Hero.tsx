/* @ts-nocheck  */

import { Button } from "./Button";
import { Container } from "./Container";
import Image from "next/image";

export function Hero() {
  return (
    <Container className=" pb-16 text-center">
      <Image
        priority
        src={"/headerimage.png"}
        alt={"header image for wedding"}
        width={"900"}
        height={"300"}
        className="h-full w-full object-cover lg:-px-8 -px-4"
      />
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/contacto">Contact</Button>
        <Button
          href="/#servicios"
          className=" bg-bouquet-500 bg-boi text-white"
        >
          RSVP
        </Button>
      </div>
    </Container>
  );
}
