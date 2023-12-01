"use client";

import Image from "next/image";
import { StyledIntro, StyledIntroContent, StyledIntroImage } from "./styles";
import { AdvisorySolutions, AdvisorySolutionsEntity } from "@/gql/graphql";
import { Html } from "@/components/shared/Html/Html";

export const Intro = ({ as }: { as: AdvisorySolutionsEntity }) => {
  return (
    <StyledIntro>
      <StyledIntroContent>
        <Html content={`${as.attributes?.description}`} />
      </StyledIntroContent>
      <StyledIntroImage>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${as.attributes?.image?.data?.attributes?.url}`}
          alt={""}
          fill={true}
        />
      </StyledIntroImage>
    </StyledIntro>
  );
};
