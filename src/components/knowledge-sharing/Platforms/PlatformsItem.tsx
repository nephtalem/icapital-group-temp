"use client";
import Image from "next/image";
import { Action } from "./Action";

export const PlatformsItem = ({
  banner,
  title,
  description,
  toParticipate,
  toSponsor,
  theme,
}: {
  banner: string;
  title: string;
  description: string;
  toParticipate: boolean;
  toSponsor: boolean;
  theme: string;
}) => {
  return (
    <div className="group grid auto-rows-max grid-cols-1 items-start justify-items-center gap-4 md:gap-10 md:grid-cols-2">
      <div className="relative grid h-40 md:h-full w-full overflow-hidden rounded-lg md:row-start-1 md:group-even:col-start-2">
        <Image
          src={`${banner}`}
          alt={""}
          fill={true}
          quality={100}
          className="object-contain object-top"
        />
      </div>
      <div
        className="grid auto-rows-max items-start justify-items-start rounded-lg bg-[#fafafa] p-5 md:p-10 md:row-start-1 md:group-even:col-start-1 "
        style={{
          borderBottom: `10px solid ${theme}`,
        }}
      >
        <h2
          style={{
            color: theme,
          }}
          className="text-2xl md:text-[2rem] font-bold"
        >
          {title}
        </h2>
        <h5 className="mb-[2.4rem] mt-[2.8rem] text-justify text-[1rem] font-medium text-[#333]">
          {description}
        </h5>
        <div className="grid w-full gap-y-5 grid-cols-1 md:grid-cols-2 justify-items-center ">
          {toParticipate ? (
            <Action
              title={"To Participate"}
              action={"Register Here"}
              bg={"bg-[#F07709]"}
              border={"border-b-[#9F4E03]"}
              to={"/knowledge-sharing/east-africa-finance-summit/register"}
            />
          ) : (
            <></>
          )}
          {toSponsor ? (
            <Action
              title={"To Sponsor"}
              action={"Apply Here"}
              bg={"bg-[#243B7E]"}
              border={"border-b-[#0D2056]"}
              to={"/knowledge-sharing/east-africa-finance-summit/apply"}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
