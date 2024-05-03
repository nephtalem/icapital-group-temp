"use client";
import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import { ReactPlayer } from "./Upcoming";

export const VideoContainer = ({
  upcoming,
}: {
  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
}) => {
  return (
    <div className={"grid justify-items-center gap-10 md:px-40 px-5 pb-20"}>
      <h2 className={"text-xl text-center md:text-4xl font-semibold text-black"}>
        Recap Rewind: A Glimpse Back at the 6th EAFS
      </h2>
      <div className="grid aspect-square md:aspect-video w-full items-center justify-items-center">
        <ReactPlayer
          url={`${upcoming.attributes?.content?.youtubeUrl}`}
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          controls={true}
        />
      </div>
    </div>
  );
};
