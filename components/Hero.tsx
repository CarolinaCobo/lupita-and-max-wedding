/* @ts-nocheck  */

import { Button } from "./Button";
import { Container } from "./Container";
import Image from "next/image";

export function Hero() {
  return (
    <Container className=" pb-16 text-center">
      <Image
        priority
        src={"/header.png"}
        alt={"header image for wedding"}
        width={"900"}
        height={"300"}
        className="h-full w-full object-cover "
      />
      <div className="flex justify-center gap-x-6">
        <Button href="/rsvp" name="RSVP" />
      </div>
    </Container>
  );
}
