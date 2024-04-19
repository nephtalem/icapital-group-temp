"use client";
import { Button } from "@/components/shared/buttons/Button";
import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";

export const Landing = ({
  upcoming,
  base,
}: {
  base: string;

  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
}) => {
  return (
    <div className="grid h-[40rem] w-screen">
      <div className="relative grid h-[40rem] w-screen">
        <Image
          src={`${upcoming.attributes?.content?.background?.data?.attributes?.url}`}
          alt={""}
          quality={100}
          fill={true}
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute grid h-full w-full auto-rows-max justify-items-center">
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
        <Link className="mt-[3rem]" href={`${base}/register`}>
          <Button label={"REGISTER HERE"} onClick={(): void => {}} />
        </Link>
      </div>
    </div>
  );
};
