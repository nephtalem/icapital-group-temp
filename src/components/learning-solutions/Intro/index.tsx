"use client";

import { Html } from "@/components/shared/Html/Html";
import {
  LearningSolutionsEntity
} from "@/gql/graphql";
import Image from "next/image";
import { StyledIntro, StyledIntroContent, StyledIntroImage } from "./styles";

export const Intro = ({ ls }: { ls: LearningSolutionsEntity }) => {
  return (
    <StyledIntro>
      <StyledIntroContent>
        <Html content={`${ls.attributes?.description}`} />
      </StyledIntroContent>
      <StyledIntroImage>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${ls.attributes?.image?.data?.attributes?.url}`}
          alt={""}
          fill={true}
        />
      </StyledIntroImage>
    </StyledIntro>
  );
};
