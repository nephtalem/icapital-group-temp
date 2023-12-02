"use client";
import { MainText } from "@/components/shared/MainText";
import { SummitEntity } from "@/gql/graphql";
import { Session } from "./Session";

export const Summits = ({ summit }: { summit: SummitEntity; }) => {
  return (
    <div className="mt-[10rem] grid p-[3.5rem]">
      <MainText title={"Proceedings of the Summit"} />
      {summit.attributes?.session?.map((session, index) => (
        <Session key={index} session={session!} />
      ))}
    </div>
  );
};
