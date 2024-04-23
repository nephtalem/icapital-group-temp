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
    <div className="grid w-screen px-[2rem] py-10 gap-10 md:px-[5rem]">
      <div className="grid max-w-[45rem] justify-items-center justify-self-center text-center">
        <MainText title={title} />
        {/* <p className="mt-[2rem] text-[1rem] text-black">{organizerIntro}</p> */}
      </div>
      <div className="flex w-full gap-10 flex-wrap justify-center">
        {organizer!.map((organizer, index) => (
          <Organizer
            key={index}
            to={organizer!.url!}
            image={`${organizer?.logo?.data?.attributes?.url}`}
            width={organizer?.logo?.data?.attributes?.width ?? 0}
            height={organizer?.logo?.data?.attributes?.height ?? 1}
          />
        ))}
      </div>
    </div>
  );
};
