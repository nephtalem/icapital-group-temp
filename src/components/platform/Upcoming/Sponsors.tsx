"use client";
import { MainText } from "@/components/shared/MainText";
import { ComponentSponsorSponsor } from "@/gql/graphql";
import { Sponsor } from "./Sponsor";
import { SponsorsCategoryItem } from "./SponsorsCategoryItem";

export const Sponsors = ({
  sponsorIntro,
  sponsor,
  title,
}: {
  sponsorIntro: string;
  sponsor: ComponentSponsorSponsor[];
  title?: string;
}) => {
  console.log(sponsor);
  return (
    <div className="px:[2rem] grid w-screen gap-10 py-10 md:px-[5rem]">
      <div className="grid max-w-[90rem] justify-items-center justify-self-center text-center">
        <MainText title={title ?? "Sponsors"} />
        {/* <p className="mt-[2rem] text-[1rem] text-black">{sponsorIntro}</p> */}
      </div>
      <div className="grid w-full grid-cols-1 gap-20">
        {sponsor.filter((sponsor) => sponsor.level?.toString() === "Platinum")
          .length > 0 ? (
          <SponsorsCategoryItem title={"Platinum"}>
            {sponsor
              .filter((sponsor) => sponsor.level?.toString() === "Platinum")
              .map((sponsor, index) => (
                <Sponsor
                  key={index}
                  to={sponsor!.url!}
                  image={`${sponsor?.logo?.data?.attributes?.url}`}
                  width={sponsor?.logo?.data?.attributes?.width ?? 0}
                  height={sponsor?.logo?.data?.attributes?.height ?? 1}
                />
              ))}
          </SponsorsCategoryItem>
        ) : (
          <></>
        )}
        {sponsor.filter((sponsor) => sponsor.level?.toString() === "Gold")
          .length > 0 ? (
          <SponsorsCategoryItem title={"Gold"}>
            {sponsor
              .filter((sponsor) => sponsor.level?.toString() === "Gold")
              .map((sponsor, index) => (
                <Sponsor
                  key={index}
                  to={sponsor!.url!}
                  image={`${sponsor?.logo?.data?.attributes?.url}`}
                  width={sponsor?.logo?.data?.attributes?.width ?? 0}
                  height={sponsor?.logo?.data?.attributes?.height ?? 1}
                />
              ))}
          </SponsorsCategoryItem>
        ) : (
          <></>
        )}
        {sponsor.filter((sponsor) => sponsor.level?.toString() === "Silver")
          .length > 0 ? (
          <SponsorsCategoryItem title={"Silver"}>
            {sponsor
              .filter((sponsor) => sponsor.level?.toString() === "Silver")
              .map((sponsor, index) => (
                <Sponsor
                  key={index}
                  to={sponsor!.url!}
                  image={`${sponsor?.logo?.data?.attributes?.url}`}
                  width={sponsor?.logo?.data?.attributes?.width ?? 0}
                  height={sponsor?.logo?.data?.attributes?.height ?? 1}
                />
              ))}
          </SponsorsCategoryItem>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
