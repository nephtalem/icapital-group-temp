"use client";
import { ComponentEafsSessionEafsSession } from "@/gql/graphql";
import { Moderator } from "./Moderator";
import { Speaker } from "./Speaker";


export const Session = ({ session }: { session: ComponentEafsSessionEafsSession; }) => {
  return (
    <div className="mt-[3rem] grid">
      <h3 className="text-[1.6rem]">{session.title}</h3>
      <div className="mt-[3rem] grid grid-cols-[3fr,1fr]">
        <div className="grid w-full grid-cols-1 gap-[3rem] md:grid-cols-3">
          {session.speaker?.map((speaker, index) => (
            <Speaker speaker={speaker!} key={index} />
          ))}
        </div>
        {session.moderator ? <Moderator speaker={session.moderator!} /> : <></>}
      </div>
    </div>
  );
};
