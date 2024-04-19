"use client";
import DownloadIcon from "@/assets/icons/download.svg";
import WatchIcon from "@/assets/icons/watch.svg";
import { Html } from "@/components/shared/Html/Html";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import { SummitEntity } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";

export const Remark = ({ summit }: { summit: SummitEntity; }) => {
  return (
    <div className="grid grid-cols-[1.3fr,1fr] gap-x-[3rem] p-[4rem]">
      <div className="grid auto-rows-max items-start">
        <h2 className="text-[1.6rem] font-bold text-black">Opening Remark</h2>
        <Html
          style={{
            fontStyle: "normal",
            fontWeight: " 500",
            fontSize: "2rem",
            lineHeight: "2.5rem",
            textAlign: "justify",
            color: "#000000",
          }}
          content={summit.attributes!.openingRemark!.remark!} />
        <div className="mt-[2.5rem] grid grid-cols-2 gap-x-[2rem]">
          <Link
            href={`${summit.attributes!
              .openingRemark?.speechFile?.data?.attributes?.url}`}
            target={"_blank"}
            download
          >
            <ActionButton
              label={"Download Full Speech"}
              color={"bg-[#F07709]"}
              border={"border-[#9F4E03]"}
              icon={<DownloadIcon />}
              onClick={(): void => { }} />
          </Link>

          <Link
            href={summit.attributes!.openingRemark!.youtubeUrl ?? ""}
            target={"_blank"}
          >
            <ActionButton
              label={"Watch the Video"}
              color={"bg-[#243B7E]"}
              border={"border-[#0D2056]"}
              icon={<WatchIcon />}
              onClick={(): void => { }} />
          </Link>
        </div>
      </div>
      <div className="grid auto-rows-max justify-items-center">
        <div className="relative grid h-[20rem] w-full bg-slate-100">
          <Image
            className="object-cover"
            src={`${summit.attributes?.openingRemark?.picture?.data?.attributes?.url}`}
            alt={""}
            fill={true} />
        </div>
        <h3 className="mt-[1.6rem] text-[1.2rem] font-bold text-black">
          {summit.attributes?.openingRemark?.name}
        </h3>
        <p className="mt-[1rem] text-[1rem] font-semibold text-black">
          {summit.attributes?.openingRemark?.position}
        </p>
      </div>
    </div>
  );
};
