"use client";
import { ReactNode, useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";
import * as NProgress from "nprogress";

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    NProgress.done();
  }, [pathname, router]);
  return <div className="grid">{children}</div>;
};
