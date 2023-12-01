"use client";

import { Footer } from "@/components/shared/Footer/Footer";
import { HeaderAlt } from "./Header/HeaderAlt";
import { ReactNode } from "react";

export const Content = ({
  scrollable = true,
  noFooter,
  children,
}: {
  scrollable?: boolean;
  noFooter?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`${
        scrollable ? "relative" : "sticky"
      } grid h-screen w-screen overflow-y-auto overflow-x-hidden`}
    >
      <HeaderAlt />
      {children}
      {noFooter ? <></> : <Footer />}
    </div>
  );
};
