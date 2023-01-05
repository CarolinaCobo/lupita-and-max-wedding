import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import Header from "../components/Header";
import { Container } from "../components/Container";
import Divider from "../components/Divider";
import { Contact } from "../components/Contact";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next/types";
import Footer from "../components/Footer";

export default function Rsvp() {
  const t = useTranslations("Data");

  const radioOptions = [
    { id: "yes", title: t("yes") },
    { id: "no", title: t("no") },
  ];

  const busTimesOptions = [
    { id: "24:00", title: "24:00" },
    { id: "01:00", title: "01:00" },
    { id: "02:00", title: "02:00" },
    { id: "04:00", title: "04:00" },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      await fetch("/api/sheet", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setOpen(true);
      reset();
    } catch (error) {
      setOpen(false);
      alert(t("error"));
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Divider />
        <h1 className=" font-bold font-greatVibes text-slate-800 sm:text-5xl mt-8">
          <span className="text-6xl">{t("joiningUs")}</span>
        </h1>

        <div className="mt-6 space-y-7 text-base text-slate-600">
          <p>{t("joiningUsText")}</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="mt-10 gap-y-8 gap-x-6 sm:grid-cols-2 shadow-lg"
        >
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("name")}
                    <span className="text-bouquet-800">*</span>
                  </label>
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bouquet-500 focus:ring-bouquet-500 sm:text-sm"
                  />
                  {errors.firstName && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("surname")}
                    <span className="text-bouquet-800">*</span>
                  </label>
                  <input
                    {...register("lastName", { required: true })}
                    type="text"
                    placeholder="Smith"
                    name="lastName"
                    id="lastName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bouquet-500 focus:ring-bouquet-500 sm:text-sm"
                  />
                  {errors.firstName && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("email")}
                    <span className="text-bouquet-800">*</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="email@email.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bouquet-500 focus:ring-bouquet-500 sm:text-sm"
                  />
                  {errors.email && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="col-span-6 sm:col-span-4 my-2">
                    <p className="block text-sm font-medium text-gray-700 mt-2">
                      {t("busOption")}
                      <span className="text-bouquet-800">*</span>
                    </p>
                    <fieldset className="mt-4">
                      <div className="space-y-2">
                        {radioOptions.map((busOption) => (
                          <div key={busOption.id} className="flex items-center">
                            <input
                              {...register("busOption", { required: true })}
                              id={busOption.id}
                              name="busOption"
                              type="radio"
                              value={busOption.title}
                              defaultChecked={busOption.id === "yes"}
                              className="h-4 w-4 border-gray-300 text-bouquet-600 focus:ring-bouquet-500"
                            />
                            {errors.busOption && (
                              <span className="text-red-600">
                                This field is required
                              </span>
                            )}
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
                    {t("busTime")}
                    <span className="text-bouquet-800">*</span>
                  </p>
                  <fieldset className="mt-4">
                    <div className="space-y-2">
                      {busTimesOptions.map((busTimeOption) => (
                        <div
                          key={busTimeOption.id}
                          className="flex items-center"
                        >
                          <input
                            {...register("busTime", { required: true })}
                            id={busTimeOption.id}
                            name="busTime"
                            type="radio"
                            value={busTimeOption.id}
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
                      {t("veganMenu")}
                      <span className="text-bouquet-800">*</span>
                    </p>
                    <fieldset className="mt-4">
                      <div className="space-y-2">
                        {radioOptions.map((veganMenu) => (
                          <div key={veganMenu.id} className="flex items-center">
                            <input
                              {...register("veganMenu", { required: true })}
                              id={veganMenu.id}
                              name="veganMenu"
                              type="radio"
                              value={veganMenu.id}
                              defaultChecked={veganMenu.id === "yes"}
                              className="h-4 w-4 border-gray-300 text-bouquet-600 focus:ring-bouquet-500"
                            />
                            <label
                              htmlFor={veganMenu.id}
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {veganMenu.title}
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
                    {t("allergies")}
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register("allergies")}
                      id="allergies"
                      name="allergies"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-bouquet-500 focus:ring-bouquet-500 sm:text-sm"
                      placeholder={t("yesTo")}
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="message"
                    className=" text-sm font-medium text-gray-700"
                  >
                    {t("other")}
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
              <Button type="submit" name={t("send")} />
            </div>
            <Modal open={open} setOpen={setOpen} />
          </div>
        </form>
        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </Container>
    </>
  );
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
