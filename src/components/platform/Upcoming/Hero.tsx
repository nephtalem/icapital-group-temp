"use client";
import { Button, OutlineButton } from "@/components/shared/buttons/Button";
import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Hero = ({
  upcoming,
  base,
  className,
}: {
  base: string;
  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
  className?: string;
}) => {
  return (
    <div className={twMerge("grid h-dvh w-screen", className)}>
      <div className="relative grid h-full w-full">
        <Image
          src={"/images/eafs.hero.png"}
          alt={""}
          quality={100}
          fill={true}
          priority
          className="object-cover"
        />
        <div
          className={"absolute left-0 top-0 z-10 h-dvh w-screen"}
          style={{
            background:
              "linear-gradient(180deg, #1A2B42 0%, rgba(106, 71, 45, 0.81) 49.49%, rgba(240, 119, 9, 0.50) 100%)",
          }}
        />
      </div>
      <div className="absolute z-20 grid h-full w-full auto-rows-max content-center items-center justify-items-center px-5 pt-40 ">
        <div
          className={
            "grid grid-cols-[max-content,max-content] items-stretch gap-8"
          }
        >
          <h1
            className={
              "text-center text-8xl font-bold leading-[96px] md:leading-[140px] text-white md:text-[140px] "
            }
          >
            7<sup>th</sup>
          </h1>
          <div className={"flex h-full flex-col justify-between md:gap-1"}>
            <h3
              className={
                "text-2xl font-semibold leading-[1.875rem] text-white md:leading-[32px]"
              }
            >
              East Africa
            </h3>
            <h3
              className={
                "text-2xl font-semibold leading-[1.875rem] text-white md:leading-[32px]"
              }
            >
              Finance
            </h3>
            <h3
              className={
                "text-2xl  font-semibold leading-[1.875rem] text-white md:leading-[32px]"
              }
            >
              Summit
            </h3>
          </div>
        </div>
        <p className="mt-4 max-w-[100%] text-justify break-words hyphens-auto md:text-center text-sm font-medium text-white md:mt-10 md:max-w-[70%] md:text-xl">
          The East Africa Finance Summit (EAFS) convenes industry experts,
          bankers, executives, entrepreneurs, policymakers, and more to
          collaborate, address challenges, explore opportunities, strategize,
          share knowledge, and shape the finance sector&apos;s future. The
          summit showcases renowned speakers, panel discussions, and valuable
          insights for actionable outcomes.
        </p>
        <div className="mt-8 w-full md:w-auto grid gap-x-10 gap-y-5 md:mt-10 md:grid-cols-2 ">
          <Link className="grid w-full" href={`${base}/register`}>
            <Button label={"Register here"} onClick={(): void => {}} />
          </Link>
          <Link className="grid w-full" href={`${base}`}>
            <OutlineButton label={"Sponsor us"} onClick={(): void => {}} />
          </Link>
        </div>
      </div>
    </div>
  );
};
