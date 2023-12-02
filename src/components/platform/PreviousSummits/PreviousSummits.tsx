"use client";

import { SummitEntity } from "@/gql/graphql";
import { PreviousSummit } from "./PreviousSummit";

export const PreviousSummits = ({ summits }: { summits: SummitEntity[] }) => {
  return (
    <div className="grid grid-cols-1 gap-[3rem] px-[1rem] py-[3.5rem] md:grid-cols-2 md:p-[3.5rem]">
      {summits.map((summit, index) => (
        <PreviousSummit key={index} summit={summit} />
      ))}
    </div>
  );
};

