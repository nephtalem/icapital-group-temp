"use client";
import { Button } from "@/components/shared/buttons/Button";
import { SummitEntity } from "@/gql/graphql";
import { ReactPlayer } from "./SummitDetail";

export const Intro = ({ summit }: { summit: SummitEntity; }) => {
  return (
    <div className="grid grid-cols-2 gap-x-[3rem] p-[4rem]">
      <div className="grid justify-items-start">
        <h2 className="text-[1.6rem] font-bold text-black">
          {summit.attributes?.intro?.title}
        </h2>
        <p className="mb-[1rem] mt-[1.4rem] text-justify text-[1rem] font-medium text-black">
          {summit.attributes?.intro?.shortDescription}
        </p>
        <Button label={"Read More"} onClick={(): void => { }} />
      </div>
      <div className="grid h-full w-full">
        <ReactPlayer
          url={summit.attributes!.intro!.youtubeUrl!}
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          controls={true} />
      </div>
    </div>
  );
};
