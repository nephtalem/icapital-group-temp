"use client";
import Footer from "@/components/Home/Footer";
import { Social } from "@/components/home/Header/Social";
import { socials } from "@/components/home/Header/Socials";
import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
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
          fill={true}
        />
      </div>
      <div className="absolute grid grid-cols-1 gap-x-[3rem] self-center justify-self-center md:grid-cols-[1fr,2fr] md:px-[4rem]">
        <div className="relative grid aspect-square w-full opacity-30 md:h-[20rem] md:w-[20rem]">
          <Image
            className="object-contain"
            src={`${upcoming.attributes?.content?.logo?.data?.attributes?.url}`}
            alt={""}
            quality={100}
            fill={true}
          />
        </div>
        <div className="mt-10 grid items-center justify-center justify-items-center md:mt-0 md:justify-start md:justify-items-start">
          <h1 className="flex items-center gap-y-[2rem] text-center text-lg font-extrabold text-white md:text-[4.8rem]">
            Connect with us
          </h1>
          {/* <div className="flex gap-[1.6rem]">
            {socials.map((social, index) => (
              <Social
                key={index}
                to={social.to}
                title={social.title}
                icon={social.icon}
                className="h-16 fill-accent md:h-[3.5rem] md:w-[3.5rem]"
              />
            ))}
          </div> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};
