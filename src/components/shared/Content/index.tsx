"use client";

import { HeaderAlt } from "@/components/shared/Header";
import { ReactNode } from "react";
import { StyledContent } from "./styles";

export const Content = ({
  scrollable = true,
  children,
}: {
  scrollable?: boolean;
  children: ReactNode;
}) => {
  return (
    <StyledContent scrollable={scrollable}>
      <HeaderAlt />
      {children}
    </StyledContent>
  );
};
