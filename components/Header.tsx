import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function Header() {
  const t = useTranslations("Data");

  const navigation = [
    { name: t("schedule"), href: "/#program" },
    { name: t("attractions"), href: "/attractions" },
    { name: t("accommodation"), href: "/accommodation" },
    { name: t("honeymoon"), href: "/honeymoon" },
    { name: t("contact"), href: "/#contact" },
  ];

  return (
    <Disclosure as="nav" className="p-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 justify-between">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-bouquet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bouquet-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" aria-label="Home">
                  <Image
                    src={"/logo.svg"}
                    alt={"logo"}
                    width={"160"}
                    height={"300"}
                  />
                </Link>
              </div>

              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 flex-end">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:bg-bouquet-700 hover:text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Button href="/rsvp" name="RSVP" />
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-gray-700 hover:bg-bouquet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
