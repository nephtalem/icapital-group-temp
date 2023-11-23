"use client";

import { Html } from "@/components/shared/Html/index";
import {
  LearningSolutionsEntity
} from "@/gql/graphql";
import { StyledCallToAction } from "./styles";
export const CallToAction = ({ ls }: { ls: LearningSolutionsEntity }) => {
  return (
    <StyledCallToAction>
      <Html content={`${ls.attributes?.callToAction}`} />
    </StyledCallToAction>
  );
};
