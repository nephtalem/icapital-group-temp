import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "nprogress/nprogress.css";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Mulish } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Layout } from "@/components/shared/Layout";
import NProgress from "nprogress";
import { Router } from "next/router";
import { polyfill } from "interweave-ssr";

const mulish = Mulish({ subsets: ["latin"] });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
polyfill();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${mulish.style.fontFamily};
        }
      `}</style>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
