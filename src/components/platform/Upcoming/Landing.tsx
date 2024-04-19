"use client";
import { Button } from "@/components/shared/buttons/Button";
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
      <div className="absolute py-10 px-5 grid h-full w-full auto-rows-max justify-items-center">
        <div className="relative mt-[2.4rem] h-[16rem] w-[16rem]">
          <Image
            src={`${upcoming.attributes?.content?.logo?.data?.attributes?.url}`}
            alt={""}
            fill={true}
            className="object-contain"
          />
        </div>
        <h1 className="mt-[1.6rem] text-center text-[1.6rem] font-bold text-white">
          {upcoming.attributes?.content?.title}
        </h1>
        <p className="mt-[1.6rem] max-w-[100%] text-center text-[1.3rem] font-medium text-white md:max-w-[50%]">
          &quot;{upcoming.attributes?.content?.intro}&quot;
        </p>
        <div className="grid gap-x-10 md:grid-cols-2 ">
          <Link className="mt-[3rem] w-full grid" href={`${base}/register`}>
            <Button label={"REGISTER HERE"} onClick={(): void => {}} />
          </Link>
          <Link className="mt-[3rem] w-full grid" href={`${base}/apply`}>
            <Button label={"SPONSOR US"} onClick={(): void => {}} />
          </Link>
        </div>
      </div>
    </div>
  );
};
