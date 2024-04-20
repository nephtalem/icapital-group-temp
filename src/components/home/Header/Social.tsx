import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const Social = ({
  to,
  title,
  icon,
  className,
}: {
  to: string;
  icon: (style: string) => ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <Link href={to} target="_blank">
      <div title={title}>
        {icon(twMerge("h-5 w-5 fill-white md:h-[1rem]", className))}
      </div>
    </Link>
  );
};
