"use client";
import { Social } from "@/components/home/Header/Social";
import { socials } from "@/components/home/Header/Socials";
import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity
} from "@/gql/graphql";
import Image from "next/image";

export const Connect = ({
  upcoming,
}: {
  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
}) => {
  return (
    <div className="relative grid h-[40rem] w-screen">
      <div className="relative grid h-[40rem] w-screen">
        <Image
          className="object-cover"
          src={`${upcoming.attributes?.content?.background?.data?.attributes?.url}`}
          alt={""}
          quality={100}
          fill={true} />
      </div>
      <div className="absolute grid grid-cols-1 gap-x-[3rem] self-center px-[4rem] md:grid-cols-[1fr,2fr]">
        <div className="relative grid h-[20rem] w-[20rem] opacity-30">
          <Image
            className="object-contain"
            src={`${upcoming.attributes?.content?.logo?.data?.attributes?.url}`}
            alt={""}
            quality={100}
            fill={true} />
        </div>
        <div className="grid items-center">
          <h1 className="flex items-center gap-y-[2rem] text-[2rem] font-extrabold text-white md:text-[4.8rem]">
            Connect with us
          </h1>
          <div className="flex gap-[1.6rem]">
            {socials.map((social, index) => (
              <Social
                key={index}
                to={social.to}
                title={social.title}
                icon={social.icon}
                className="h-[3.5rem] fill-accent" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
