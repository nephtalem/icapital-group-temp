"use client";
import { ComponentSessionSession } from "@/gql/graphql";
import { SessionItem } from "./SessionItem";


export const Session = ({ session }: { session: ComponentSessionSession; }) => {
  return (
    <div className="grid">
      <div className="mt-[5rem] grid grid-cols-[max-content,1fr] gap-x-[3rem]">
        <h3 className="text-[1.6rem] font-bold text-black">{session.title}</h3>
        <p className="text-[1rem] font-medium text-black">
          {session.description}
        </p>
      </div>
      <div className="mt-[3rem] grid grid-cols-3 gap-[1rem]">
        {session.sessionVideo?.map((video, index) => (
          <SessionItem key={index} video={video!} />
        ))}
      </div>
    </div>
  );
};
