"use client";

import { ActionButton } from "@/components/shared/Button";
import Image from "next/image";
import {
  StyledBackground,
  StyledContent,
  StyledPreviousSummit,
  StyledPreviousSummits,
  StyledStatus,
} from "./styles";
import Link from "next/link";
import { SummitEntity } from "@/gql/graphql";

export const PreviousSummits = ({ summits }: { summits: SummitEntity[] }) => {
  return (
    <StyledPreviousSummits>
      {summits.map((summit, index) => (
        <PreviousSummit key={index} summit={summit} />
      ))}
    </StyledPreviousSummits>
  );
};

const PreviousSummit = ({ summit }: { summit: SummitEntity }) => {
  const base: {
    [key: string]: string;
  } = {
    EAFS: "east-africa-finance-summit/summit",
    EACMS: "east-africa-cement-and-concrete-construction-summit/summit",
    ECCDA: "conference-on-human-capital-development-in-africa/conference",
  };
  return (
    <Link
      href={`/knowledge-sharing/${base[summit.attributes!.type!]}/${
        summit.attributes?.slug
      }`}
    >
      <StyledPreviousSummit>
        <StyledBackground>
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA}${summit.attributes?.background?.data?.attributes?.url}`}
            alt={""}
            fill={true}
          />
          <StyledStatus>{summit.attributes?.status}</StyledStatus>
          <h1>{summit.attributes?.date}</h1>
        </StyledBackground>
        <StyledContent>
          <h2>{summit.attributes?.name}</h2>
          <p>&quot;{summit.attributes?.slogan}&quot;</p>
          <ActionButton
            label={"Read More"}
            color={"#F07709"}
            border={"#9F4E03"}
            onClick={(): void => {}}
          />
        </StyledContent>
      </StyledPreviousSummit>
    </Link>
  );
};
