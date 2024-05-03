"use client";
import { Button, OutlineButton } from "@/components/shared/buttons/Button";
import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import { Calendar2, Location } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
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
    <div className={twMerge("grid min-h-dvh w-screen md:h-dvh", className)}>
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
          className={"absolute left-0 top-0 z-10 h-full w-screen"}
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
              "text-center text-8xl font-bold leading-[96px] text-white md:text-[120px] md:leading-[120px] "
            }
          >
            7<sup>th</sup>
          </h1>
          <div className={"flex h-full flex-col justify-between md:gap-1"}>
            <h3
              className={
                "text-base font-semibold leading-[1.875rem] text-white md:text-xl md:leading-[28px]"
              }
            >
              East Africa
            </h3>
            <h3
              className={
                "text-base font-semibold leading-[1.875rem] text-white md:text-xl md:leading-[28px]"
              }
            >
              Finance
            </h3>
            <h3
              className={
                "text-base font-semibold leading-[1.875rem] text-white md:text-xl md:leading-[28px]"
              }
            >
              Summit
            </h3>
          </div>
        </div>
        <p className="mt-4 max-w-[100%] hyphens-auto break-words text-justify text-sm font-medium text-white md:mt-10 md:max-w-[80%] md:text-center md:text-lg">
          The East Africa Finance Summit (EAFS) convenes industry experts,
          bankers, executives, entrepreneurs, policymakers, and more to
          collaborate, address challenges, explore opportunities, strategize,
          share knowledge, and shape the finance sector&apos;s future. The
          summit showcases renowned speakers, panel discussions, and valuable
          insights for actionable outcomes.
        </p>
        <div
          className={
            "mt-4 grid grid-cols-2 items-start justify-self-center md:mt-10 md:gap-10"
          }
        >
          <HeroData
            icon={
              <Calendar2 className={"h-6 w-6 md:h-9 md:w-9"} color="#fff" />
            }
            label={"When"}
            value={"9th - 10th May, 2024"}
          />
          <HeroData
            icon={<Location className={"h-6 w-6 md:h-9 md:w-9"} color="#fff" />}
            label={"Where"}
            value={"Skylight Hotel, Addis Ababa, Ethiopia"}
          />
        </div>
        <div className="mt-4 grid w-full gap-x-10 gap-y-5 md:mt-10 md:w-auto md:grid-cols-2 ">
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

const HeroData = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div
      className={
        "grid grid-cols-[max-content,1fr] items-center gap-1 md:gap-2 md:first:justify-end"
      }
    >
      {icon}
      <div className={"grid"}>
        <p className={"text-xs text-white md:text-sm"}>{label}</p>
        <p className={"text-xs font-bold text-white md:text-base"}>{value}</p>
      </div>
    </div>
  );
};
