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
        className="fixed right-[-100vw] top-0 z-[100] grid h-dvh w-screen grid-cols-[max-content,1fr] md:w-[25rem]"
        ref={drawer}
        onMouseLeave={() => {
          gsap.to(drawer.current, { right: "-50rem" });
        }}
      >
        <div
          className="left-0 top-0 z-[100] grid h-dvh w-[16vw]"
          onClick={() => {
            gsap.to(drawer.current, { right: "-50rem" });
          }}
        />
        <div className={"grid"}>
          <Drawer />
        </div>
      </div>
    </>
  );
};
