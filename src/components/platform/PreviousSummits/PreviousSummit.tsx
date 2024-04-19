"use client";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import { SummitEntity } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";

export const PreviousSummit = ({ summit }: { summit: SummitEntity; }) => {
  const base: {
    [key: string]: string;
  } = {
    EAFS: "east-africa-finance-summit/summit",
    EACMS: "east-africa-cement-and-concrete-construction-summit/summit",
    ECCDA: "conference-on-human-capital-development-in-africa/conference",
  };
  return (
    <Link
      href={`/knowledge-sharing/${base[summit.attributes!.type!]}/${summit
        .attributes?.slug}`}
    >
      <div className="grid cursor-pointer rounded-lg border border-border bg-white pb-[1.6rem] ">
        <div className="relative grid h-[20rem]  w-full overflow-hidden rounded-lg">
          <Image
            className="object-cover"
            src={`${summit.attributes?.background?.data?.attributes?.url}`}
            alt={""}
            fill={true} />
          <div className="absolute right-0 top-0 grid rounded-lg bg-green-500 p-[.5rem] text-base font-bold text-white">
            {summit.attributes?.status}
          </div>
          <h1 className="absolute self-center justify-self-center text-[2rem] font-bold text-white">
            {summit.attributes?.date}
          </h1>
        </div>
        <div className="grid justify-items-center px-[.5rem] text-center">
          <h2 className="mt-[1.8rem] text-[1.4rem] font-bold text-black">
            {summit.attributes?.name}
          </h2>
          <p className="mb-[1.6rem] mt-[1rem] text-[1rem] font-medium text-black">
            &quot;{summit.attributes?.slogan}&quot;
          </p>
          <ActionButton
            label={"Read More"}
            color={"bg-[#F07709]"}
            border={"border-[#9F4E03]"}
            onClick={(): void => { }} />
        </div>
      </div>
    </Link>
  );
};
