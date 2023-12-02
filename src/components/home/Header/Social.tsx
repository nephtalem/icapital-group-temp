import Link from "next/link";
import { ReactNode } from "react";


export const Social = ({
  to, title, icon,
}: {
  to: string;
  icon: (style: string) => ReactNode;
  title: string;
}) => {
  return (
    <Link href={to} target="_blank">
      <div title={title}>{icon("h-[0.8rem] fill-white md:h-[1rem]")}</div>
    </Link>
  );
};
