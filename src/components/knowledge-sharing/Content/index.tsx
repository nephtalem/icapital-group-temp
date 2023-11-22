"use client";
import { Header } from "@/components/shared/Header";
import { StyledContent } from "./styles";
import { Footer } from "@/components/shared/Footer";
import { ReactNode } from "react";

export const Content = ({
  scrollable = true,
  children,
}: {
  scrollable?: boolean;
  children: ReactNode;
}) => {
  return (
    <StyledContent scrollable={scrollable}>
      <Header
        options={[
          {
            label: "Home",
            to: "/knowledge-sharing",
            base: "/knowledge-sharing",
          },
          {
            label: "EAFS",
            to: `/knowledge-sharing/east-africa-finance-summit/`,
            base: "/knowledge-sharing/east-africa-finance-summit",
          },

          {
            label: "EACMS",
            to: `/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/`,
            base: "/knowledge-sharing/east-africa-cement-and-concrete-construction-summit",
          },
          {
            label: "CHCDA",
            to: `/knowledge-sharing/conference-on-human-capital-development-in-africa/`,
            base: "/knowledge-sharing/conference-on-human-capital-development-in-africa",
          },
        ]}
      />
      {children}
      <Footer />
    </StyledContent>
  );
};
