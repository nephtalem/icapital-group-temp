"use client";
import { Footer } from "@/components/shared/Footer/Footer";
import { Header } from "@/components/shared/Header/Header";
import { ReactNode } from "react";

export const Content = ({
  scrollable = true,
  children,
}: {
  scrollable?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`relative grid h-screen w-screen overflow-y-auto overflow-x-hidden`}
    >
      <Header
        scrollable={scrollable}
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
    </div>
  );
};
