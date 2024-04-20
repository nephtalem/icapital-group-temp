import TechawksLogo from "@/assets/icons/logo.svg";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="flex h-24 w-screen items-center justify-between bg-black px-[4vw] text-white md:px-12">
      <p className="text-sm font-medium">
        Copyright {new Date().getFullYear()}, All right reserved
      </p>
      {/* <div className="flex content-center items-center gap-1 text-sm font-medium">
        Made by
        <Link
          className="flex content-center text-white items-center gap-1"
          href={"https://techawks.io/"}
          target={"_blank"}
        >
          <TechawksLogo className={"h-[0.7rem]"} />
          Techawks
        </Link>
      </div> */}
    </footer>
  );
};
