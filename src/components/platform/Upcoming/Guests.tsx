"use client";
import { MainText } from "@/components/shared/MainText";
import { UpcomingEafsEntity } from "@/gql/graphql";
import { Guest } from "./Guest";

export const Guests = ({
  upcoming,
  title,
}: {
  upcoming: UpcomingEafsEntity;
  title?: string;
}) => {
  return (
    <div className="grid w-screen gap-10 px-[2rem] py-10 md:px-[5rem]">
      <MainText title={title ?? "Guest of Honours"} />
      <div className="grid w-full grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:grid-cols-4">
        {upcoming.attributes?.guestOfHonour?.map((guest, index) => (
          <Guest guest={guest!} key={index} />
        ))}
      </div>
    </div>
  );
};
