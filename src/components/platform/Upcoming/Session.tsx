"use client";
import { ComponentEafsSessionEafsSession } from "@/gql/graphql";
import { Speaker } from "./Speaker";


export const Session = ({ session }: { session: ComponentEafsSessionEafsSession; }) => {
  return (
    <div className="mt-[3rem] grid">
      <h3 className="text-[1.6rem]">{session.title}</h3>
      <div className="mt-[3rem] grid">
        <div className="grid w-full grid-cols-1 gap-[3rem] md:grid-cols-4">
          {session.speaker?.map((speaker, index) => (
            <Speaker speaker={speaker!} key={index} />
          ))}
        </div>
        {/* {session.moderator ? <Moderator speaker={session.moderator!} /> : <></>} */}
      </div>
    </div>
  );
};
