"use client";
import { KnowledgeSharingEntity } from "@/gql/graphql";
import Image from "next/image";

export const Landing = ({
  knowledgeSharing,
}: {
  knowledgeSharing: KnowledgeSharingEntity;
}) => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-x-[7.4rem] p-[2.5rem]">
      <div className="grid auto-rows-max ">
        <h1 className="text-[3.2rem] font-bold text-accent">Knowledge</h1>
        <h2 className="text-[2rem] font-bold text-text">sharing platform</h2>
        <p className="mt-[2rem] text-justify text-[1.2rem] font-medium text-text">
          {knowledgeSharing.attributes?.intro}
        </p>
        <div className="mt-[2rem] grid  grid-cols-[0.4rem,1fr] gap-[.8rem] gap-y-[.5rem] justify-self-start rounded-[.4rem] bg-[#fafafa] p-[2rem] ">
          <span className="h-[1.6rem] w-[0.4ren] bg-accent" />
          <h3 className="text-[1.2rem] font-semibold text-text">
            “{knowledgeSharing.attributes?.quote}“
          </h3>
          <h5 className="col-start-1 col-end-[-1] justify-self-end text-[1rem] font-semibold text-black/60">
            {knowledgeSharing.attributes?.quoteAuthor}
          </h5>
        </div>
      </div>
      <div className="relative grid h-[20rem] w-full self-center">
        <Image
          src={"/images/grey.logo.png"}
          quality={100}
          fill={true}
          alt={""}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};
