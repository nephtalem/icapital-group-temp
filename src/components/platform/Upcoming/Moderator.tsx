"use client";
import DownloadIcon from "@/assets/icons/download.svg";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import { ComponentPersonPerson } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";


export const Moderator = ({ speaker }: { speaker: ComponentPersonPerson; }) => {
  return (
    <div className="grid justify-items-center">
      <div className="relative grid h-[15rem] w-full">
        <Image
          src={`${speaker?.picture?.data?.attributes?.url}`}
          alt={""}
          fill={true}
          className="object-contain" />
        <span>Moderator</span>
      </div>
      <h4 className="mt-[2rem] text-[1.2rem]">{speaker.name}</h4>
      <p className="mb-[1.5rem] mt-[.5rem] text-[.8rem] font-semibold">
        {speaker.position}
      </p>

      {speaker.document?.data?.attributes?.url ? (
        <Link
          href={`${speaker.document.data!
            .attributes!.url!}`}
          target={"_blank"}
          download
        >
          <ActionButton
            label={"Download Abstract"}
            color={"#F07709"}
            border={"#9F4E03"}
            icon={<DownloadIcon />}
            onClick={(): void => { }} />
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};
