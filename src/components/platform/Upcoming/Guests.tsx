"use client";
import { MainText } from "@/components/shared/MainText";
import { UpcomingEafsEntity } from "@/gql/graphql";
import { Guest } from "./Guest";

export const Guests = ({ upcoming }: { upcoming: UpcomingEafsEntity }) => {
  return (
    <div className="grid w-screen px-[2rem] py-[6rem] md:px-[5rem]">
      <MainText title={"Guest of Honours"} />
      <div className="mt-[3rem] grid w-full grid-cols-3 px-[3rem]">
        {upcoming.attributes?.guestOfHonour?.map((guest, index) => (
          <Guest guest={guest!} key={index} />
        ))}
      </div>
    </div>
  );
};
