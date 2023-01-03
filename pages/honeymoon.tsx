import { Button } from "../components/Button";
import { Contact } from "../components/Contact";
import { Container } from "../components/Container";
import Divider from "../components/Divider";
import { Header } from "../components/Header";
import Link from "next/link";

const activities = [
  {
    title: "Flights to Japan",
    link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/250000",
    image: "./plane.jpeg",
    amount: "€3000",
    description: "The first step to get us there!",
  },
  {
    title: "Accommodation",
    link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/150000",
    image: "./hotel.jpeg",
    amount: "€1500",
    description: "Somewhere to rest while we get ready for more fun in Japan",
  },
  {
    title: "Food for Lupi",
    link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/40000",
    image: "./food.jpeg",
    amount: "€400",
    description: "Let's face it, if Lupi eats, the holidays will be better",
  },
  {
    title: "Transport",
    link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/100000",
    image: "./transport.jpeg",
    amount: "€1000",
    description: "We will be moving around a lot!",
  },
  {
    title: "Theme Parks and Cultural attractions",
    link: "https://www.leetchi.com/en/Contribution/MediumSelection/wOBQeb8Y/100000",
    image: "./theme-park.jpeg",
    amount: "€1000",
    description: "All the fun is waiting for us!",
  },
];

export default function Honeymoon() {
  return (
    <>
      <Header />
      <Divider />
      <Container className="pb-16 text-left">
        <div className="lg:order-first lg:row-span-2 ">
          <h1 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl">
            <span className="text-6xl">Honeymoon</span>
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600">
            <p>
              The greatest gift will undoubtedly be your presence in such an
              important day for us.
            </p>
            <p>
              But if you still want to help us in our honeymoon this website
              replaces the traditional wedding gifts for more flexibility when
              choosing our gifts. As you probably already know we have the long
              time dream of visiting Japan, so whatever contribution you can
              make to our dream would make us really happy. In just one click
              your can make a contribution however big or small.
            </p>
            <p>
              Thank you in advance and we are looking forward to seeing you on
              the big day!
            </p>

            <div className="mt-6 space-y-7 text-base text-slate-600">
              <p>
                If you would prefer to access the full website directly you can
                find it
                <Link
                  href="https://www.leetchi.com/c/honeymoon-in-japan-maxlupi"
                  className="text-bouquet-600 hover:text-bouquet-700 font-bold"
                >
                  {" "}
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={activity.image}
                  alt="activity image"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <span className="inline-flex items-center rounded-full bg-bouquet-400 px-3 py-0.5 text-sm font-medium text-white">
                    {activity.amount}
                  </span>
                  <a href={activity.link} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {activity.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {activity.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center ">
                  <div className="flex-shrink-0">
                    <Button href={activity.link} name="Participate" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Divider />
        <Contact />
      </Container>
    </>
  );
}
