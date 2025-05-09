import "@/styles/globals.css";
import "nprogress/nprogress.css";

import { polyfill } from "interweave-ssr";
import { Mulish, Nunito } from "next/font/google";

import { Theme } from "@/styles/theme";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

export const dynamic = "force-dynamic";
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-century-gothic",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN}`),
  title: "The i-Capital Africa Institute",
  description: "..in the business of transforming people...",
  openGraph: {
    title: "The i-Capital Africa Institute",
    description: "..in the business of transforming people...",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`custom-scrollbar ${mulish.variable} ${nunito.variable}`}
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
