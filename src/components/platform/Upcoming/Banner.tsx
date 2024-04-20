"use client";
import { Html } from "@/components/shared/Html/Html";
import { Button, OutlineButton } from "@/components/shared/buttons/Button";
import { UpcomingEafsEntity } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import { ReactPlayer } from "./Upcoming";

export const Banner = ({
  upcoming,
  base,
}: {
  upcoming: UpcomingEafsEntity;
  base: string;
}) => {
  return (
    <div className="grid w-screen grid-cols-1 gap-x-10 gap-y-[3rem]  px-[1rem] py-20 md:grid-cols-2 md:px-[3.5rem]">
      <div className="grid justify-items-start gap-6">
        <h1 className="text-center md:text-left text-xl font-bold text-accent md:text-xl">
          {upcoming.attributes?.content?.title}
        </h1>
        <Html
          className="text-sm font-normal text-text md:text-left text-center"
          content={`${upcoming.attributes?.content?.description}`}
        />
        <div className="mt-6 grid w-full justify-center gap-x-10 gap-y-5 md:mt-[3rem] md:grid-cols-2 ">
          <Link className="grid w-full" href={`${base}/register`}>
            <Button label={"REGISTER HERE"} onClick={(): void => {}} />
          </Link>
          <Link className="grid w-full" href={`${base}/apply`}>
            <OutlineButton label={"SPONSOR US"} onClick={(): void => {}} />
          </Link>
        </div>
      </div>

      <div className="relative aspect-square w-full md:aspect-[16/9]">
        {upcoming.attributes?.introVideo ? (
          <ReactPlayer
            url={`${upcoming.attributes?.introVideo}`}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            controls={true}
          />
        ) : (
          <Image
            src={`${upcoming.attributes?.content?.banner?.data?.attributes?.url}`}
            alt={""}
            fill={true}
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
};
