"use client";
import { ComponentPersonPerson } from "@/gql/graphql";
import Image from "next/image";

export const Guest = ({ guest }: { guest: ComponentPersonPerson }) => {
  return (
    <div className="grid auto-rows-max items-start justify-items-center">
      <div className="relative grid h-[15rem] w-full">
        <Image
          src={`${guest?.picture?.data?.attributes?.url}`}
          alt={""}
          fill={true}
          className="object-contain"
        />
      </div>
      <h4 className="mt-[2rem] text-[1.2rem]">{guest.name}</h4>
      <p className="mt-[0.5rem] text-[.8rem] font-semibold text-center">{guest.position}</p>
    </div>
  );
};
