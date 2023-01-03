import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { NavLink } from "./NavLink";
import Image from "next/image";

function MobileNavLink({ href, children }: any) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: any) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      height="100%"
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/#program">Schedule</MobileNavLink>
            <MobileNavLink href="/attractions">Attractions</MobileNavLink>
            <MobileNavLink href="/accomodation">Accomodation</MobileNavLink>
            <MobileNavLink href="/honeymoon">Honeymoon</MobileNavLink>
            <MobileNavLink href="/#contact">Contact</MobileNavLink>d
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  return (
    <header className="py-10 ">
      <Container>
        <nav className="relative z-50 flex items-center justify-between ">
          <Link href="/" aria-label="Home">
            <Image
              src={"/logo.svg"}
              alt={"logo"}
              width={"200"}
              height={"300"}
            />
          </Link>
          <div className="flex items-center md:gap-x-12 justify-center">
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/#program">Schedule</NavLink>
              <NavLink href="/attractions">Attractions</NavLink>
              <NavLink href="/accomodation">Accomodation</NavLink>
              <NavLink href="/honeymoon">Honeymoon</NavLink>
              <NavLink href="/#contact">Contact</NavLink>

              <NavLink href="/rsvp"></NavLink>
            </div>
            <div className="flex items-center gap-x-1 md:gap-x-8">
              <Button className="bg-bouquet-600" href="/rsvp">
                RSVP
              </Button>
              <div className="-mr-1 md:hidden">
                <MobileNavigation />
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}