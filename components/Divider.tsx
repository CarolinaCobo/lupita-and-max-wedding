import Image from "next/image";

export default function Divider() {
  return (
    <div className="grid justify-items-center">
      <Image
        src={"/divider.png"}
        alt={"header image for wedding"}
        width={"200"}
        height={"100"}
        className=" object-cover flex items-center mt-10"
      />
    </div>
  );
}
