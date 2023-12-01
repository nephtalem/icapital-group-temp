"use client";
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
      <div className="flex" title={title}>
        {icon("h-[3rem] fill-[#243b7e] md:h-[2rem]")}
      </div>
    </Link>
  );
};
