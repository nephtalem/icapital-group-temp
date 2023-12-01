import OpenIcon from "@/assets/icons/open.svg";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
export const Drawer = () => {
  return (
    <div className="grid h-screen w-10/12 auto-rows-max justify-items-start gap-8 bg-gradient-to-b from-[#253E5F] to-[#1A4A86] px-12 py-20  md:w-[25rem] ">
      <h1 className="mb-8 text-[1.6rem] font-bold text-white">
        i-Capital Institute
      </h1>
      <DrawerItem label={"Who we are"} to={"/who-we-are"} />
      <DrawerItem
        label={"Knowledge Sharing Platform"}
        to={"/knowledge-sharing"}
      />
      <DrawerItem label={"Advisory Solutions"} to={"/advisory-solutions"} />
      <DrawerItem label={"Learning Solutions"} to={"/learning-solutions"} />
      <DrawerItem
        label={"Cross Border Solutions"}
        to={"/cross-border-solutions"}
      />
      <DrawerItem label={"News & Blogs"} to={"/news-and-blogs"} />
    </div>
  );
};

const DrawerItem = ({ label, to }: { label: string; to: string }) => {
  const item = useRef(null);
  const span = useRef(null);

  return (
    <Link
      href={to}
      ref={item}
      onMouseEnter={() => {
        gsap.fromTo(span.current, { width: 0, left: 0 }, { width: "100%" });
      }}
      onMouseLeave={() => {
        gsap.to(span.current, { width: 0, left: "100%" });
      }}
    >
      <div className="group relative flex items-center gap-7 duration-300 ease-in-out">
        <p className="text-[1.2rem] text-white duration-300 ease-linear group-hover:text-accent">
          {label}
        </p>
        <OpenIcon
          className={
            "h-[0.8rem] fill-white duration-300 ease-linear group-hover:fill-accent"
          }
        />
        <span
          ref={span}
          className="absolute bottom-[-1rem] left-0 h-0.5 w-0 bg-accent"
        />
      </div>
    </Link>
  );
};
