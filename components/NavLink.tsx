import Link from "next/link";

export function NavLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-bouquet-300 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}
