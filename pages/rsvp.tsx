import Link from "next/link";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import Divider from "../components/Divider";
import { Contact } from "../components/Contact";

export default function Rsvp() {
  const radioOptions = [
    { id: "yes", title: "Yes" },
    { id: "no", title: "No" },
  ];
  const busTimesOptions = [
    { id: "24:00", title: "24:00" },
    { id: "01:00", title: "01:00" },
    { id: "02:00", title: "02:00" },
    { id: "04:00", title: "04:00" },
  ];

  const { register, handleSubmit, reset } = useForm();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <Divider />
        <h1 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl mt-8">
          <span className="text-6xl">Are you joining us?</span>
        </h1>

        <div className="mt-6 space-y-7 text-base text-slate-600">
          <p>
            If you are, please send us the form below filled as soon as
            possible, if you have any questions please reach out to any of us
          </p>
        </div>

        <form
          onSubmit={() => {}}
          method="POST"
          className="mt-10 gap-y-8 gap-x-6 sm:grid-cols-2 shadow-lg"
        >
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    {...register("first-name")}
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="John"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bouquet-500 focus:ring-bouquet-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Surname
                  </label>
                  <input
                    {...register("last-name")}
                    required
                    type="text"
                    placeholder="Smith"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bouquet-500 focus:ring-bouquet-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    required
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="email@email.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bouquet-500 focus:ring-bouquet-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="col-span-6 sm:col-span-4 my-2">
                    <p className="block text-sm font-medium text-gray-700 mt-2">
                      Would you take the bus?
                    </p>
                    <fieldset className="mt-4">
                      <legend className="sr-only">Notification method</legend>
                      <div className="space-y-2">
                        {radioOptions.map((busOption) => (
                          <div key={busOption.id} className="flex items-center">
                            <input
                              id={busOption.id}
                              name="bus-yes-no"
                              required
                              type="radio"
                              defaultChecked={busOption.id === "yes"}
                              className="h-4 w-4 border-gray-300 text-bouquet-600 focus:ring-bouquet-500"
                            />
                            <label
                              htmlFor={busOption.id}
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {busOption.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <p className="block text-sm font-medium text-gray-700 mt-2">
                    What time would you like to take the bus back?
                  </p>
                  <fieldset className="mt-4">
                    <div className="space-y-2">
                      {busTimesOptions.map((busTimeOption) => (
                        <div
                          key={busTimeOption.id}
                          className="flex items-center"
                        >
                          <input
                            id={busTimeOption.id}
                            required
                            name="bus-time"
                            type="radio"
                            defaultChecked={busTimeOption.id === "24:00"}
                            className="h-4 w-4 border-gray-300 text-bouquet-600 focus:ring-bouquet-500"
                          />
                          <label
                            htmlFor={busTimeOption.id}
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            {busTimeOption.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="col-span-6 sm:col-span-4 my-2">
                    <p className="block text-sm font-medium text-gray-700 mt-2">
                      Would you like the vegan menu?
                    </p>
                    <fieldset className="mt-4">
                      <legend className="sr-only">Notification method</legend>
                      <div className="space-y-2">
                        {radioOptions.map((menuOption) => (
                          <div
                            key={menuOption.id}
                            className="flex items-center"
                          >
                            <input
                              id={menuOption.id}
                              name="vegan-yes-no"
                              required
                              type="radio"
                              defaultChecked={menuOption.id === "yes"}
                              className="h-4 w-4 border-gray-300 text-bouquet-600 focus:ring-bouquet-500"
                            />
                            <label
                              htmlFor={menuOption.id}
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {menuOption.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4 my-2">
                  <label
                    htmlFor="allergies"
                    className=" text-sm font-medium text-gray-700"
                  >
                    Allergies
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register("allergies")}
                      id="allergies"
                      name="allergies"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-bouquet-500 focus:ring-bouquet-500 sm:text-sm"
                      placeholder="Yes to..."
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="message"
                    className=" text-sm font-medium text-gray-700"
                  >
                    Other
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register("message")}
                      id="message"
                      name="message"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bouquet-500 focus:ring-bouquet-500 sm:text-sm"
                      placeholder="Notes/comments"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" name="Send" onClick={() => setOpen(true)} />
            </div>
            <Modal open={open} setOpen={setOpen} />
          </div>
        </form>

        <Contact />
      </Container>
    </>
  );
}
