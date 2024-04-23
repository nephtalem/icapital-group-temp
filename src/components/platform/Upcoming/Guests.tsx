"use client";
import { MainText } from "@/components/shared/MainText";
import { UpcomingEafsEntity } from "@/gql/graphql";
import { Guest } from "./Guest";

export const Guests = ({ upcoming }: { upcoming: UpcomingEafsEntity }) => {
  return (
    <div className="grid w-screen px-[2rem] py-10 md:px-[5rem] gap-10">
      <MainText title={"Guest of Honours"} />
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-10">
        {upcoming.attributes?.guestOfHonour?.map((guest, index) => (
          <Guest guest={guest!} key={index} />
        ))}
      </div>
    </div>
  );
};
