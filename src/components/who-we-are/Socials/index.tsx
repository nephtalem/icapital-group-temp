"use client";

import { socials } from "@/components/home/Header/Socials";
import Link from "next/link";
import { ReactNode } from "react";

export const Socials = () => {
  return (
    <div className="my-[4rem] grid gap-y-[4rem]">
      <div className="flex gap-[2rem] justify-self-center">
        {socials.map((social, index) => (
          <Social
            key={index}
            to={social.to}
            title={social.title}
            icon={social.icon}
          />
        ))}
      </div>
      <p className="justify-self-center text-center text-sm font-medium text-text">
        Copyright {new Date().getFullYear()}, All right reserved
      </p>
    </div>
  );
};

const Social = ({
  to,
  title,
  icon,
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
