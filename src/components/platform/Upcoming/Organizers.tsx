"use client";
import { MainText } from "@/components/shared/MainText";
import { ComponentOrganizerOrganizer } from "@/gql/graphql";
import { Organizer } from "./Organizer";

export const Organizers = ({
  organizer,
  organizerIntro,
  title,
}: {
  title: string;
  organizerIntro: string;
  organizer: ComponentOrganizerOrganizer[];
}) => {
  return (
    <div className="grid w-screen px-[2rem] py-[8rem] md:px-[5rem]">
      <div className="my-[3rem] grid max-w-[45rem] justify-items-center justify-self-center text-center">
        <MainText title={title} />
        <p className="mt-[2rem] text-[1rem] text-black">{organizerIntro}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-[3rem] md:grid-cols-3">
        {organizer!.map((organizer, index) => (
          <Organizer
            key={index}
            to={organizer!.url!}
            image={`${process.env.NEXT_PUBLIC_DATA}${organizer?.logo?.data?.attributes?.url}`}
          />
        ))}
      </div>
    </div>
  );
};
