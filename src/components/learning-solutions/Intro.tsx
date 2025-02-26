"use client";

import { Html } from "@/components/shared/Html/Html";
import { LearningSolutionsEntity } from "@/gql/graphql";
import Image from "next/image";

export const Intro = ({ ls }: { ls: LearningSolutionsEntity }) => {
  return (
    <div className="mx-auto my-14 grid gap-8 px-4 md:grid-cols-[3fr,2fr] md:px-12">
      <Html
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8rem",
          fontWeight: "600",
          color: "#1a2b42",
          textAlign: "justify",
        }}
        content={ls.attributes?.description ?? ""}
      />
      <div className="relative h-[16rem] w-full md:h-[20rem]">
        <Image
          src={ls.attributes?.image?.data?.attributes?.url ?? ""}
          alt="Learning Solutions"
          className="rounded-lg object-cover"
          fill
        />
      </div>
    </div>
  );
};
