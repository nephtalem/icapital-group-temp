"use client";
import Image from "next/image";
import { Action } from "./Action";

export const PlatformsItem = ({
  banner, title, description, toParticipate, toSponsor, theme,
}: {
  banner: string;
  title: string;
  description: string;
  toParticipate: boolean;
  toSponsor: boolean;
  theme: string;
}) => {
  return (
    <div
      className="mb-[10rem] grid justify-items-center rounded-lg bg-[#fafafa]"
      style={{
        borderBottom: `10px solid ${theme}`,
      }}
    >
      <div className="relative grid h-[27rem] w-full overflow-hidden rounded-lg">
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${banner}`}
          alt={""}
          fill={true}
          quality={100}
          className="object-contain" />
      </div>
      <h2
        style={{
          color: theme,
        }}
        className="mt-[4rem] text-center text-[2rem] font-bold"
      >
        {title}
        {theme}
      </h2>
      <h5 className="mb-[2.4rem] mt-[2.8rem] max-w-[70%] text-justify text-[1rem] font-medium text-[#333]">
        {description}
      </h5>
      <div className="mb-[3.4rem] grid w-[60%] grid-cols-2 justify-items-center ">
        {toParticipate ? (
          <Action
            title={"To Participate"}
            action={"Register Here"}
            bg={"bg-[#F07709]"}
            border={"border-b-[#9F4E03]"}
            to={"/knowledge-sharing/east-africa-finance-summit/register"} />
        ) : (
          <></>
        )}
        {toSponsor ? (
          <Action
            title={"To Sponsor"}
            action={"Apply Here"}
            bg={"bg-[#243B7E]"}
            border={"border-b-[#0D2056]"}
            to={"/knowledge-sharing/east-africa-finance-summit/apply"} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
