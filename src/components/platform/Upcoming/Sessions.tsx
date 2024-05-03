"use client";
import { MainText } from "@/components/shared/MainText";
import {
  Enum_Componentpersonperson_Type,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import { Session } from "./Session";
import { Speaker } from "./Speaker";

export const Sessions = ({
  upcoming,
  title,
}: {
  upcoming: UpcomingEafsEntity;
  title?: string;
}) => {
  return (
    <>
      <div className="grid w-screen gap-10 px-[2rem] py-10 md:px-[5rem]">
        <MainText title={"Speakers"} />
        {upcoming.attributes?.session?.map((session, index) => (
          <div
            key={index}
            className="grid w-full grid-cols-1 gap-[3rem] md:grid-cols-4"
          >
            {session!.speaker
              ?.filter(
                (s) => s?.type === Enum_Componentpersonperson_Type.Speaker,
              )
              .map((speaker, index) => (
                <Speaker speaker={speaker!} key={index} />
              ))}
          </div>
        ))}
      </div>
      <div className="grid w-screen gap-10 py-10 md:px-[5rem]">
        <MainText title={"Moderators"} />
        {upcoming.attributes?.session?.map((session, index) => (
          <div
            key={index}
            className="grid w-full grid-cols-1 gap-[3rem] md:grid-cols-4"
          >
            {session!.speaker
              ?.filter(
                (s) => s?.type === Enum_Componentpersonperson_Type.Moderator,
              )
              .map((speaker, index) => (
                <Speaker speaker={speaker!} key={index} />
              ))}
          </div>
        ))}
      </div>
    </>
  );
};
