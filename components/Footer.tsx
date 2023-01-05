import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const t = useTranslations("LocaleSwitcher");

  const { locale, locales, route } = useRouter();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="flex justify-end rounded-full mr-6">
            <Link href={route} locale="en">
              <img
                className="h-6 w-6 rounded-full flex-end ml-4"
                src="/irishFlag.png"
                alt=""
              />
            </Link>
            <Link href={route} locale="fr">
              <img
                className="h-6 w-6 rounded-full flex-end mx-4"
                src="/frenchFlag.png"
                alt=""
              />
            </Link>
            <Link href={route} locale="es">
              <img
                className="h-6 w-6 rounded-full flex-end mr-4"
                src="/mexicoFlag.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">
            &copy; Lupita & Max ~ 01 | 07 | 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
