"use client";
import { ReactNode } from "react";
import { StyledLayout } from "./styles";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <StyledLayout>{children}</StyledLayout>;
};
