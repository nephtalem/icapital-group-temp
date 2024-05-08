"use client";
import { MainText } from "@/components/shared/MainText";
import {
  ComponentEafsSessionEafsSession,
  Enum_Componentpersonperson_Type,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import { Session } from "./Session";
import { Speaker } from "./Speaker";
import Image from "next/image";

export const Speakers = ({
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

export const Sessions = ({ upcoming }: { upcoming: UpcomingEafsEntity }) => {
  return (
    <div className={"grid gap-14 bg-white px-4 py-16 md:px-10"}>
      <MainText
        title={`${
          upcoming.attributes?.eafsSetting?.find(
            (s) => s?.sectionName === "session",
          )?.title
        }`}
      />
      <div className={"grid grid-cols-1 items-start auto-rows-max gap-10 md:grid-cols-2 lg:grid-cols-3"}>
        {upcoming.attributes?.session?.map((session, index) => (
          <SessionCard session={session!} key={index} />
        ))}
      </div>
    </div>
  );
};

const SessionCard = ({
  session,
}: {
  session: ComponentEafsSessionEafsSession;
}) => {
  return (
    <div className={"grid rounded-3xl gap-6 px-8 py-5 shadow auto-rows-max items-start"}>
      <h3 className={"text-base font-bold text-black"}>{session.title}</h3>
      <div className={"grid auto-rows-max gap-6"}>
        {session.points?.map((point, index) => (
          <SessionInfo text={point?.content ?? ""} key={index} />
        ))}
      </div>
    </div>
  );
};

const SessionInfo = ({ text }: { text: string }) => {
  return (
    <div className={"grid gap-4 items-start grid-cols-[24px,1fr]"}>
      <Image src={"/images/check.svg"} alt={""} height={24} width={24} />
      <p className={"text-xs text-black"}>{text}</p>
    </div>
  );
};
