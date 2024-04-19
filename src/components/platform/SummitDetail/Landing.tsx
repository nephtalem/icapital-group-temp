"use client";
import { SummitEntity } from "@/gql/graphql";
import Image from "next/image";

export const Landing = ({ summit }: { summit: SummitEntity; }) => {
  return (
    <div className="relative grid h-[35rem] w-screen">
      <Image
        className="object-cover"
        src={`${summit.attributes?.background?.data?.attributes?.url}`}
        alt={""}
        fill={true} />
      <div className="absolute grid justify-items-center self-center justify-self-center">
        <h1 className="text-center text-[3rem] font-extrabold text-white">
          {summit.attributes?.name}
        </h1>
        <p className="mt-[2rem] text-[1.2rem] font-medium text-white">
          &quot;{summit.attributes?.slogan}&quot;
        </p>
        <h3 className="mt-[3rem] text-[2rem] font-bold text-white">
          {summit.attributes?.date}
        </h3>
        <h6 className="mt-[2rem] text-[1.2rem] font-semibold italic text-white">
          {summit.attributes?.status}
        </h6>
      </div>
    </div>
  );
};
