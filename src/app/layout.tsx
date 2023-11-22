import "nprogress/nprogress.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Layout } from "@/components/shared/Layout";
import "@/styles/globals.css";
import { polyfill } from "interweave-ssr";
import { Mulish } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StyledComponentsRegistry from "@/lib/registry";
import { Theme } from "@/styles/theme";
import "leaflet/dist/leaflet.css";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import "react-medium-image-zoom/dist/styles.css";
import "react-phone-number-input/style.css";

export const dynamic = "force-dynamic";
const mulish = Mulish({ subsets: ["latin"] });
polyfill();

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <ToastContainer />
        <StyledComponentsRegistry>
          <NextTopLoader
            color={Theme.colors.primary}
            height={2}
            showSpinner={false}
          />
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
