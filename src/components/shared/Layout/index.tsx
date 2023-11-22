"use client";
import { ReactNode, useEffect } from "react";
import { StyledLayout } from "./styles";

import * as NProgress from "nprogress";
import { usePathname, useRouter } from "next/navigation";

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    NProgress.done();
  }, [pathname, router]);
  return <StyledLayout>{children}</StyledLayout>;
};
