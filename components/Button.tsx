import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none",
};

const variantStyles = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-bouquet-200 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    bouquet:
      "bg-bouquet-600 text-white hover:text-slate-100 hover:bg-bouquet-500 active:bg-bouquet-800 active:text-slate-100 focus-visible:outline-bouquet-600",
    white:
      "bg-white text-slate-900 hover:bg-bouquet-50 active:bg-bouquet-200 active:text-slate-600 focus-visible:outline-white",
  },
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-bouquet-600 focus-visible:ring-slate-300",
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
  },
};

export function Button({
  variant = "solid",
  color = "slate",
  className,
  href,
  ...props
}: any) {
  className = clsx(
    // @ts-ignore
    baseStyles[variant],
    // @ts-ignore
    variantStyles[variant][color],
    className
  ) as any;

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
