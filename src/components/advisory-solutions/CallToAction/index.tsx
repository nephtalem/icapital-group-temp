"use client";

import { AdvisorySolutionsEntity } from "@/gql/graphql";
import { Html } from "@/components/shared/Html/index";
import { StyledCallToAction } from "./styles";
export const CallToAction = ({ as }: { as: AdvisorySolutionsEntity }) => {
  return (
    <StyledCallToAction>
      <Html content={`${as.attributes?.callToAction}`} />
    </StyledCallToAction>
  );
};
