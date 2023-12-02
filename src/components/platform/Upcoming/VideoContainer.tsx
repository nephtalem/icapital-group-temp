"use client";
import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity
} from "@/gql/graphql";
import { ReactPlayer } from "./Upcoming";

export const VideoContainer = ({
  upcoming,
}: {
  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
}) => {
  return (
    <div className="grid h-[30rem] w-screen items-center justify-items-center bg-[#01102f] px-[2rem] py-[10rem] md:h-[43rem] md:px-[10rem]">
      <ReactPlayer
        url={`${upcoming.attributes?.content?.youtubeUrl}`}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        controls={true} />
    </div>
  );
};
