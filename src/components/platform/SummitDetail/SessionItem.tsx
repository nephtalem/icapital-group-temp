"use client";
import { ComponentSessionVideoVideo } from "@/gql/graphql";
import { ReactPlayer } from "./SummitDetail";


export const SessionItem = ({ video }: { video: ComponentSessionVideoVideo; }) => {
  return (
    <div className="grid rounded-lg border-border bg-white p-[1.2rem]">
      <div className="grid h-[12rem] w-full">
        <ReactPlayer
          url={video.youtubeUrl!}
          width="100%"
          height="100%"
          controls={true} />
      </div>
      <h4 className="mt-[1.4rem] text-[1rem] font-bold text-black">
        {video.title}
      </h4>
      <p className="mr-[.8rem] text-[.8rem] font-medium text-black">
        {video.description}
      </p>
    </div>
  );
};
