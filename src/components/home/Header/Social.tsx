import Link from "next/link";
import { ReactNode } from "react";

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
        {icon(className ?? "h-[0.8rem] fill-white md:h-[1rem]")}
      </div>
    </Link>
  );
};
