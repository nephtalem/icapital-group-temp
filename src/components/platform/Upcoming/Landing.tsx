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

export const Landing = ({
  upcoming,
  base,
  className,
}: {
  base: string;
  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
  className?: string;
}) => {
  return (
    <div className={twMerge("grid h-[40rem] w-screen", className)}>
      <div className="relative grid h-full w-full">
        <Image
          src={`${upcoming.attributes?.content?.background?.data?.attributes?.url}`}
          alt={""}
          quality={100}
          fill={true}
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute grid h-full w-full auto-rows-max content-center items-center justify-items-center px-5 py-10">
        <div className="relative mt-[2.4rem] h-40 w-40 md:h-[16rem] md:w-[16rem]">
          <Image
            src={`${upcoming.attributes?.content?.logo?.data?.attributes?.url}`}
            alt={""}
            fill={true}
            className="object-contain"
          />
        </div>
        <h1 className="mt-[1.6rem] text-center text-xl font-bold text-white md:text-[1.6rem]">
          {upcoming.attributes?.content?.title}
        </h1>
        <p className="mt-4 max-w-[100%] text-center text-base font-medium text-white md:mt-[1.6rem] md:max-w-[50%] md:text-[1.3rem]">
          {upcoming.attributes?.content?.intro}
        </p>
        <div className="mt-8 grid gap-x-10 gap-y-5 md:mt-[3rem] md:grid-cols-2 ">
          <Link className="grid w-full" href={`${base}/register`}>
            <Button label={"REGISTER HERE"} onClick={(): void => {}} />
          </Link>
          <Link className="grid w-full" href={`${base}`}>
            <OutlineButton
              label={"ABOUT THE SUMMIT"}
              onClick={(): void => {}}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
