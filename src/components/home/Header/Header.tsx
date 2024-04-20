import MenuIcon from "@/assets/icons/menu.svg";
import gsap from "gsap";
import { useRef } from "react";
import { Drawer } from "../Drawer";
import { Socials } from "./Socials";

export const Header = () => {
  const drawer = useRef(null);
  return (
    <>
      <div className="fixed left-0 top-0 z-[100] flex w-screen justify-between p-10">
        <Socials />
        <div className="flex gap-8">
          <h3 className="hidden text-[1.4rem] font-semibold text-white md:flex">
            Get Acquainted
          </h3>
          <button
            onMouseOver={() => {
              if (window.innerWidth < 768) return;
              gsap.to(drawer.current, { right: 0 });
            }}
            onClick={() => {
              gsap.to(drawer.current, { right: 0 });
            }}
            className="cursor-pointer"
          >
            <MenuIcon className={"w-8 md:w-12 fill-white"} />
          </button>
        </div>
      </div>
      <div
        className="fixed right-[-100vw] top-0 z-[100] h-dvh w-10/12 md:w-[25rem]"
        ref={drawer}
        onMouseLeave={() => {
          if (window.innerWidth < 768) return;
          gsap.to(drawer.current, { right: "-100vw", duration: 1 });
        }}
      >
        <Drawer />
        <div
          className="fixed left-0 top-0 h-dvh w-2/12"
          onClick={() => {
            gsap.to(drawer.current, { right: "-100vw", duration: 1 });
          }}
        />
      </div>
    </>
  );
};
