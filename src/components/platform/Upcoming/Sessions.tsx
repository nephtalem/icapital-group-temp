"use client";
import { MainText } from "@/components/shared/MainText";
import { UpcomingEafsEntity } from "@/gql/graphql";
import { Session } from "./Session";

export const Sessions = ({ upcoming }: { upcoming: UpcomingEafsEntity; }) => {
  return (
    <div className="grid w-screen px-[2rem] py-10 md:px-[5rem]">
      <MainText title={"Proceedings of the Summit"} />
      {upcoming.attributes?.session?.map((session, index) => (
        <Session key={index} session={session!} />
      ))}
    </div>
  );
};
