"use client";
import Image from "next/image";
import { StyledBanner, StyledBannerImage } from "./styles";
import { LearningSolutionsEntity } from "@/gql/graphql";
import { Button } from "@/components/shared/buttons/Button";
import Link from "next/link";

export const Banner = ({ ls }: { ls: LearningSolutionsEntity }) => {
  return (
    <StyledBanner>
      <StyledBannerImage>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${ls.attributes?.LSBanner?.image?.data?.attributes?.url}`}
          alt=""
          fill
        />
      </StyledBannerImage>
      <Link href={`${ls.attributes?.LSBanner?.callToActionLink}`}>
        <Button
          label={`${ls.attributes?.LSBanner?.callToAction}`}
          onClick={function (): void {}}
        />
      </Link>
    </StyledBanner>
  );
};
