"use client";
import { MainText } from "@/components/shared/MainText";
import { ComponentSponsorSponsor } from "@/gql/graphql";
import { Sponsor } from "./Sponsor";
import { SponsorsCategoryItem } from "./SponsorsCategoryItem";


export const Sponsors = ({
  sponsorIntro, sponsor,
}: {
  sponsorIntro: string;
  sponsor: ComponentSponsorSponsor[];
}) => {
  return (
    <div className="px:[2rem] grid w-screen py-[8rem] md:px-[5rem]">
      <div className="my-[3rem] grid max-w-[90rem] justify-items-center justify-self-center text-center">
        <MainText title={"Sponsors"} />
        <p className="mt-[2rem] text-[1rem] text-black">{sponsorIntro}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-[2rem] md:grid-cols-3">
        <SponsorsCategoryItem title={"Platinum"}>
          {sponsor
            .filter((sponsor) => sponsor.level?.toString() === "Platinum")
            .map((sponsor, index) => (
              <Sponsor
                key={index}
                to={sponsor!.url!}
                image={`${process.env.NEXT_PUBLIC_DATA}${sponsor?.logo?.data?.attributes?.url}`} />
            ))}
        </SponsorsCategoryItem>
        <SponsorsCategoryItem title={"Gold"}>
          {sponsor
            .filter((sponsor) => sponsor.level?.toString() === "Gold")
            .map((sponsor, index) => (
              <Sponsor
                key={index}
                to={sponsor!.url!}
                image={`${process.env.NEXT_PUBLIC_DATA}${sponsor?.logo?.data?.attributes?.url}`} />
            ))}
        </SponsorsCategoryItem>
        <SponsorsCategoryItem title={"Silver"}>
          {sponsor
            .filter((sponsor) => sponsor.level?.toString() === "Silver")
            .map((sponsor, index) => (
              <Sponsor
                key={index}
                to={sponsor!.url!}
                image={`${process.env.NEXT_PUBLIC_DATA}${sponsor?.logo?.data?.attributes?.url}`} />
            ))}
        </SponsorsCategoryItem>
      </div>
    </div>
  );
};
