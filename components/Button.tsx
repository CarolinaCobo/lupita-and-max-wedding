import Link from "next/link";

type Button = {
  name: string;
  href?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  target?: string;
  rel?: string;
};

export function Button({ name, href, onClick, type, target, rel }: Button) {
  return href ? (
    <Link
      href={href}
      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-bouquet-700 my-4  hover:bg-bouquet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bouquet-500"
      target={target}
      rel={rel}
    >
      {name}
    </Link>
  ) : (
    <button
      type={type}
      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-bouquet-700 my-4  hover:bg-bouquet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bouquet-500"
      name={name}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
