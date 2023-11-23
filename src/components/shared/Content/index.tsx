"use client";

import { HeaderAlt } from "@/components/shared/Header";
import { ReactNode } from "react";
import { StyledContent } from "./styles";
import { Footer } from "@/components/shared/Footer";

export const Content = ({
  scrollable = true,
  children,
}: {
  scrollable?: boolean;
  children: ReactNode;
}) => {
  return (
    <StyledContent $scrollable={scrollable}>
      <HeaderAlt />
      {children}
      <Footer />
    </StyledContent>
  );
};
