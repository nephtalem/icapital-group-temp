"use client";


import { HeaderAlt } from "./Header/HeaderAlt";
import { ReactNode } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

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
      } grid h-dvh w-screen overflow-y-auto overflow-x-hidden`}
    >
      {/* <HeaderAlt /> */}
      <div className="mb-6">
        <Header />
      </div>
      {children}
      {noFooter ? <></> : <Footer/>}
    </div>
  );
};
