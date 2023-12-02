"use client";
import { MainText } from "@/components/shared/MainText";
import { UpcomingEafsEntity } from "@/gql/graphql";
import { Session } from "./Session";

export const Sessions = ({ upcoming }: { upcoming: UpcomingEafsEntity; }) => {
  return (
    <div className="grid w-screen px-[2rem] py-[8rem] md:px-[5rem] md:py-[8rem]">
      <MainText title={"Proceedings of the Summit"} />
      {upcoming.attributes?.session?.map((session, index) => (
        <Session key={index} session={session!} />
      ))}
    </div>
  );
};
