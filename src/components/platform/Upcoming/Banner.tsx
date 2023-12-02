"use client";
import DownloadIcon from "@/assets/icons/download.svg";
import { Html } from "@/components/shared/Html/Html";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import { UpcomingEafsEntity } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import { ReactPlayer } from "./Upcoming";

export const Banner = ({ upcoming }: { upcoming: UpcomingEafsEntity; }) => {
  return (
    <div className="grid w-screen grid-cols-1 gap-x-[5rem] gap-y-[3rem] bg-background  px-[1rem] py-[7.5rem] md:grid-cols-[3fr,2fr] md:px-[3.5rem]">
      <div className="grid gap-y-[2rem]">
        <Html
          className="font-medium text-white"
          content={`${upcoming.attributes?.content?.description}`} />
        {upcoming.attributes?.introDocument?.data?.attributes?.url ? (
          <Link
            href={`${process.env.NEXT_PUBLIC_DATA}${(upcoming.attributes
              ?.introDocument!.data!.attributes!.url)!}`}
            target={"_blank"}
            download
          >
            <ActionButton
              label={"Download Document"}
              color={"bg-[#F07709]"}
              border={"border-b-[#9F4E03]"}
              icon={<DownloadIcon />}
              onClick={(): void => { }} />
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="relative h-[25rem] w-full md:h-full md:w-[25rem]">
        {upcoming.attributes?.introVideo ? (
          <ReactPlayer
            url={`${upcoming.attributes?.introVideo}`}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            controls={true} />
        ) : (
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA}${upcoming.attributes?.content?.banner?.data?.attributes?.url}`}
            alt={""}
            fill={true}
            className="object-contain" />
        )}
      </div>
    </div>
  );
};
