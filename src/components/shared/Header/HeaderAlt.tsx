import MenuIcon from "@/assets/icons/menu.svg";
import { Drawer } from "@/components/home/Drawer";
import gsap from "gsap";
import { useRef } from "react";
import { Logo } from "./Logo";

export const HeaderAlt = () => {
  const drawer = useRef(null);

  return (
    <>
      <header className="sticky top-0 z-[100] flex h-32 items-center justify-between border-b border-b-border bg-white px-[2.5rem]">
        <Logo />

        <div className="flex gap-10">
          <button
            onMouseOver={() => {
              gsap.to(drawer.current, { right: 0 });
            }}
            className="cursor-pointer"
          >
            <MenuIcon className={"w-10 fill-background md:w-16"} />
          </button>
        </div>
      </header>
      <div
        className="fixed right-[-100vw] top-0 z-[100] grid h-dvh grid-cols-[max-content,1fr] w-screen md:w-max"
        ref={drawer}
        onMouseLeave={() => {
          gsap.to(drawer.current, { right: "-100vw" });
        }}
      >
        <div
          className="left-0 top-0 z-[100] grid h-dvh w-[20vw] md:w-0"
          onClick={() => {
            gsap.to(drawer.current, { right: "-100vw" });
          }}
        />
        <div className={"grid"}>
          <Drawer />
        </div>
      </div>
    </>
  );
};
