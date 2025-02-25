"use client";

import { Header } from "@/components/shared/Header/Header";
import { ReactNode } from "react";
import Footer from "../Home/Footer";

export const Content = ({
  scrollable = true,
  children,
}: {
  scrollable?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`relative grid h-dvh w-screen overflow-y-auto overflow-x-hidden bg-[#FEF4EA]`}
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
