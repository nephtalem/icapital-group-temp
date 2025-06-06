"use client";

import { Html } from "@/components/shared/Html/Html";
import { AdvisorySolutionsEntity } from "@/gql/graphql";
import Image from "next/image";

export const Intro = ({ as }: { as: AdvisorySolutionsEntity }) => {
  return (
    <div className="mx-[2.5rem] my-[3.5rem] grid grid-cols-[3fr,2fr] items-center gap-x-[5rem]">
      <div className="grid">
        <Html
          style={{
            fontSize: "1.2rem",
            lineHeight: "2.2rem",
            fontWeight: " 600",
            color: "#1a2b42",
            textAlign: "justify",
          }}
          content={`${as.attributes?.description}`}
        />
      </div>
      <div className="relative h-[23rem]">
        <Image
          src={`${as.attributes?.image?.data?.attributes?.url}`}
          alt={""}
          fill={true}
          className="object-contain"
        />
      </div>
    </div>
  );
};
