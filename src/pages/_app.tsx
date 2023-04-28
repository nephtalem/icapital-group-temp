import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Mulish } from "next/font/google";
import { ToastContainer } from "react-toastify";

const mulish = Mulish({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${mulish.style.fontFamily};
        }
      `}</style>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
};

export default App;
